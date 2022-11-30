const headerBtn = document.querySelector('.header__btn');
const modal = document.querySelector('#modal');
const fadeBlock = document.querySelector('.fade-block');

const moreIcWrap = document.querySelector('.modal-moreic__wrap');
export const dataHbitIc = [
  // {id: 'def', src: 'def-ic', alt: 'def-ic'},
  {id: 'noSoc', src: 'no-soc', alt: 'no-social'},
  {id: 'noCof', src: 'no-cof', alt: 'no-coffee'},
  {id: 'earlyWakeup', src: 'early-wakeup', alt: 'early-wakeup'},
];

const test = {
  nameImg: 'src-fail', 
  nameImg2: 'src-cur', 
  nameImg3: 'src-done'
}


const chooseBtn = document.querySelector('#choose-btn');

// Показываем модалку при клике и задаем соответствующую стилизацю элементам
headerBtn.addEventListener('click', showModal)
function showModal() {
  headerBtn.classList.toggle('modal-close-btn');
  modal.classList.toggle('modal-open');

  // Добавляем затемнение в зависимости от того отрыто ли модалка
  const isOpen = modal.className == 'modal-window modal-open';
  isOpen ? 
    fadeBlock.classList.remove('fade-block-none') : 
    fadeBlock.classList.add('fade-block-none');
}

function showMoreIc () {
  const chooseBtn = document.querySelector('#choose-btn');
  const moreIcBlock = document.querySelector('.modal-moreic-block');
  const modalArr = document.querySelector('.modal-arr')

  chooseBtn.addEventListener('click', function() {
    if (moreIcBlock.dataset.open !== 'true') {
      moreIcBlock.dataset.open = 'true'
      moreIcWrap.style.maxHeight = `${moreIcWrap.scrollHeight}px`
    } else {
      moreIcBlock.dataset.open = 'false'
      moreIcWrap.style.maxHeight = ''
    }

    modalArr.classList.toggle('arr-active')
  })

  function onResize() {
    if (moreIcBlock.dataset.open === 'true') {
      if (parseInt(moreIcWrap.style.maxHeight) !== moreIcWrap.scrollHeight) {
        moreIcWrap.style.maxHeight = `${moreIcWrap.scrollHeight}px`
      }
    }
  }

  window.addEventListener('resize', onResize)
}
showMoreIc()


// Генерируем иконки из масива объектов и записываем их в обертку "modal-moreic__wrap"
function renderHabbitsIc() {
  dataHbitIc.forEach(item => {
    item = `<img class="modal-moreic-img" id="${item.id}" src="img/modal/${item.src}.png" alt="${item.alt}">`;
    moreIcWrap.insertAdjacentHTML('afterbegin', item)
  })
}
renderHabbitsIc();

// Записываем выбранную иконку в поле "выбранное (modal-selected-ic)"
function selectIc() {
  const selectedIc = document.querySelector('.modal-selected-ic');
  const icons = document.querySelectorAll('.modal-moreic-img');

  // Перебераем все иконки и слушаем клик по каждому
  icons.forEach(item => {
    item.addEventListener('click', function() {
      // Перемещаем теущий элемент на позиции "modal-selected-ic" ко всем дополнительным иконкам по клику
      const selectedItem = selectedIc.children[0];
      moreIcWrap.insertAdjacentElement('beforeend', selectedItem);

      // Перемещаем из дполонительного набора иконок выбранный (кликнутый) элемент на позицию "modal-selected-ic"
      selectedIc.insertAdjacentElement('afterbegin', this)
    })
  })

}
selectIc()

