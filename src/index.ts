import Shapes from './Shapes'
import renderShape from './renderShape'

document.addEventListener('DOMContentLoaded', () => {
  for (let shapes of Shapes) {
    for (let shape of shapes) {
      document.querySelector('#shapes').appendChild(
        renderShape(shape)
      )
    }
    document.querySelector('#shapes').appendChild(document.createElement('br'))
  }
  document.querySelector('#shapes')
})
