import { component } from 'picoapp'

export default component((node) => {
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
      const dark = button.dataset.background
      const lite = button.dataset.color
      inputLite.value = dark
      inputDark.value = lite
      handleColorCSS()
      colors.classList.add('show')
    })
  })

  const handleColorCSS = () => {
    const newStyle = `
      body {
        background-color: ${inputLite.value};
        color: ${inputDark.value};
      }
      .footer--text {
        color: ${inputDark.value};
      }
      .footer__shape {
        stroke: ${inputDark.value};
      }

      .footer__download:hover .footer--text {
        color: ${inputLite.value};
      }
      .footer__download:hover .footer__shape {
        stroke: ${inputLite.value};
        color: ${inputDark.value};
      }
      body button {
        color: ${inputDark.value};
        border-color: ${inputDark.value};
      }
      .toggle__colors-close {
        color: ${inputLite.value};
      }
      .project__single-blend {
        background-color: ${inputDark.value};
      }
      .alt {
        background-color: ${inputDark.value};
        color: ${inputLite.value};
      }
      .projects--single_image {
        background-color: ${inputDark.value};
      }
      .footer .newsletter button:hover span {
        color: ${inputDark.value};
      }
    `
    styles.innerHTML = newStyle;
  }
})