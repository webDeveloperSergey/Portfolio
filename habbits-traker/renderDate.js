const now = new Date();
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const curDayOfWeek = days[now.getDay()];
const curCountOfWeek = now.getDate();


const date = document.querySelector('.header__date');
date.textContent = `${curDayOfWeek}, ${curCountOfWeek}`;