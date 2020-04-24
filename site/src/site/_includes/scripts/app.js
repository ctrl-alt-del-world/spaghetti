import { picoapp } from 'picoapp'

import image from './lib/image.js'

const state = {
  menuOpen: false
}

const components = {
  image
}

export default picoapp(components, state)