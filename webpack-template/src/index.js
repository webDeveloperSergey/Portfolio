import './index.html';
import './styles/index.scss';
import './js/controller'

const userStack = {
  language: 'JavaScript',
  framework: 'Angular'
}

const user = {
  name: 'Vitalij',
  age: '37',
  ...userStack
}