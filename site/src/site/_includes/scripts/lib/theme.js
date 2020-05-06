import { component } from 'picoapp'

export default component((node) => {
  console.log('lets pico it udddp')
  const buttons = node.querySelectorAll('.js-color')
  const colors = node.querySelector('.js-toggle-colors')
  const close = node.querySelector('.js-toggle-close')

  const styles = document.querySelector('.js-switch')

  const inputLite = node.querySelector('.js-lite')
  const inputDark = node.querySelector('.js-dark')

  inputLite.addEventListener('input', () => {
    handleColorCSS()
  })

  inputDark.addEventListener('input', () => {
    handleColorCSS()
  })

  close.addEventListener('click', () => {
    colors.classList.remove('show')
  })

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active')
      })
      button.classList.add('active')
      console.log('click it up')
      const dark = button.dataset.background
      const lite = button.dataset.color
      inputLite.value = dark
      inputDark.value = lite
      handleColorCSS()
      colors.classList.add('show')
    })
  })

  const handleColorCSS = () => {
    console.log('css gods?', inputLite.value, inputDark.value)
    const newStyle = `
      body {
        background-color: ${inputLite.value};
        color: ${inputDark.value};
      }
      body button {
        color: ${inputDark.value};
        border-color: ${inputDark.value};
      }
      .toggle__colors-close {
        color: ${inputLite.value};
      }
      .alt {
        background-color: ${inputDark.value};
        color: ${inputLite.value};
      }
    `
    styles.innerHTML = newStyle;
  }
})