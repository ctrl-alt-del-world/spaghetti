import { picoapp } from 'picoapp'

import image from './lib/image.js'
import theme from './lib/theme.js'
import form from './lib/form.js'
import filters from './lib/filters.js'

const state = {
  menuOpen: false
}

const components = {
  image,
  theme,
  filters,
  form
}

export default picoapp(components, state)