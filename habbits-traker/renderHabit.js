import {dataHbitIc} from './createHabit.js'

const creatHabitBtn = document.querySelector('.mode-create-btn');
const inputHabit = document.querySelector('.modal-input');
const habitContainer = document.querySelector('.habit-container');

const daysArr = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];


creatHabitBtn.addEventListener('click', renderHabit);

function renderHabit() {
  // if (inputHabit.value == '') return

  const habit = `
      <div class="habit">
      <div class="habit__header">
        ${addIcHabit()}
        <h2 class="habit__title">${inputHabit.value}</h2>
      </div>

      <div class="habit__days">
        ${addDay()}
      </div>
    </div>
  `

  habitContainer.insertAdjacentHTML('beforeend', habit);

  resetModal();
  selectState();
  setStateDay();
}

function resetModal() {
  inputHabit.value = '';
  document.querySelector('.modal-window').classList.remove('modal-open');
  document.querySelector('.fade-block').classList.add('fade-block-none');
  document.querySelector('.header__btn').classList.remove('modal-close-btn');
}

function addIcHabit() {
  const moreicId = document.querySelector('.modal-moreic-img').id;

  if (moreicId == 'def') {
    return `<img id="def" src="img/modal/def-ic.png" alt="" class="modal-moreic-img">`
  } else {
    const selectedIc = dataHbitIc.filter(item => item.id == moreicId)

    const imgEl = selectedIc.map(item => {
      return item = `<img class="modal-moreic-img" id="${item.id}" src="img/modal/${item.src}.png" alt="${item.alt}">`
    })
    return imgEl.join('')
  }
}

function addDay() {
  const day = daysArr.map(item => {
    return `
    <button class="habit__day">
      ${item}
      <span class="habit__states">
        <img class="habit__state habit__states-done" data-state="done" src="img/main/done-ic.svg" alt="">
        <img class="habit__state habit__states-fail" data-state="fail" src="img/main/fail-ic.svg" alt="">
      </span>
    </button>
    `
  })

  return day.join('');
}

function selectState() {
  const habitDays = document.querySelectorAll('.habit__day');
  const habitStates = document.querySelectorAll('.habit__states');

  // Перебираем коллекцию кнопок каждого дня
  habitDays.forEach((item) => {
    // Слушаем клик по каждой кнопке
    item.addEventListener('click', function () {
      // Перебираем коллекцию каждого блока "состояния" и заранее сбрасываем класс показа элемента
      habitStates.forEach(item => {
        item.classList.remove('habit__states-show');
      })

      // После сброса получаем блок состояния текущего дня недели и показываем его
      const curhabitStates = this.children[0];
      curhabitStates.classList.add('habit__states-show');

      /* Соответсвенно при повторном нажатии на кнопку у всех блоков "состояния" будет сброс класска "показа", 
      а у элемента, по которому произошел клик наоборот появится, что позволит показывать 
      один конкретный (текущий) элемент */

      // Скрывать блоков "состояния" по клику на текущий элемент
      // this.addEventListener('click', function() {
      //   const hasClass = curhabitStates.className == 'habit__states habit__states-show';
      //   hasClass ? curhabitStates.classList.remove('habit__states-show') : curhabitStates.classList.add('habit__states-show');
      // })
    
    })
  })

}

selectState()




function setStateDay() {
  const habitState = document.querySelectorAll('.habit__state');


  habitState.forEach(item => {
    item.addEventListener('click', function(e) {
      const dayBtn = e.target.closest('.habit__day');
      dayBtn.classList.add('habit__day-state-selected');

      switch(e.target.dataset.state) {
        case 'done':
          dayBtn.classList.add('habit__day-done');
          dayBtn.classList.remove('habit__day-fail');
          break
        case 'fail':
          dayBtn.classList.add('habit__day-fail');
          dayBtn.classList.remove('habit__day-done');
          break
      }      
    })
  })
}
setStateDay()