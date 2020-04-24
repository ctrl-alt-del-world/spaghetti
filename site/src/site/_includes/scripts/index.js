import app from './app.js'

document.addEventListener('DOMContentLoaded', e => {
  console.log('🍝 Built by Kevin Green');
  app.mount()

  window.__app = app
})
