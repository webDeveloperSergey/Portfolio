import {priceFormatter} from './formatter.js'

const nameInput = document.querySelector('.choice__name')
const priceStartInput = document.querySelector('.choice__price-start')
const priceEndInput = document.querySelector('.choice__price-end')
const subBtn = document.querySelector('.choice__btn')

let store = {
  name: '',
  priceStart: 0,
  priceEnd: 0,
}

let {name, priceStart, priceEnd} = store

const fetchData = async () => {
  const link = `https://636e23a3b567eed48ad44d1b.mockapi.io/hardware-store/products?search=${name}`
  const result = await fetch(link)
  const data = await result.json()
  
  checkPrice(data)
}
fetchData()

function checkPrice(data) {
  if (store.priceStart === 0 && store.priceEnd === 0) return renderTmp(data)

  const filterData = []
  data.filter(item => {
    if (item.price >= priceStart && item.price <= priceEnd) {
      filterData.push(item)
    }
  })

  return renderTmp(filterData)
}


const renderTmp = (data) => {
  const blockOfItems = document.querySelector('.choice__items')
  
  const item = data.map(item => {
    return `
    <div class="choice__item">
      <img src="${item.img}" alt="" class="choice__img">
      <h3 class="choice__title">${item.name}</h3>
      <div class="choice__dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, nemo.</div>
      <div class="choice__price">${priceFormatter.format(item.price)}</div>
    </div>
  `
    
  }).join('')

  blockOfItems.innerHTML = item
}


const getDataInput = (nameInput, priceStartInput, priceEndInput) => {
  nameInput.addEventListener('input', function() {
    this.value = this.value.replace(/\d/g, '')
    name = this.value.trim()
  })

  priceStartInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '')
    priceStart = +this.value.trim()
  })

  priceEndInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '')
    priceEnd = +this.value.trim()
  })
}
getDataInput(nameInput, priceStartInput, priceEndInput)


subBtn.addEventListener('click', subData)

function subData() {
  if (name === undefined || name === '') {
    nameInput.classList.add('err')
    name = ''
  } else {
    nameInput.classList.remove('err')
  }

  if (priceStart === undefined) {
    price = 0
  }

  if (priceEnd === undefined) {
    priceEnd = 0
  }

  store = {
    name,
    priceStart,
    priceEnd,
  }

  const searchTitle = document.querySelector('.choice__title-res')
  searchTitle.textContent = `Результат поиска: ${store.name}`


  console.log(store)
  fetchData()
}

