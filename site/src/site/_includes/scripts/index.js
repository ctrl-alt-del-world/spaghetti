import app from './app.js'
import operator from 'operator'

const router = operator('#root')

document.addEventListener('DOMContentLoaded', e => {
  console.log('🍝 Built by Kevin Green');
  app.mount()

  window.__app = app
})

router.on('after', ({ title, location }) => {
  document.title = title
  window.history.pushState({}, '', location)
  app.mount()
})