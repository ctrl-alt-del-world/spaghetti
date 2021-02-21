import { component } from 'picoapp'


export default component((node) => {

  const buttons = node.querySelectorAll('[data-filter]')
  const userCols = node.querySelector('.js-users')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const type = button.getAttribute('data-filter')
      button.classList.toggle('active')
      userCols.classList.toggle(type)
    })
  })

})