import { picoapp } from 'picoapp'

import image from './lib/image.js'
import theme from './lib/theme.js'

const state = {
  menuOpen: false
}

const components = {
  image,
  theme
}

export default picoapp(components, state)