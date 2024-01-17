//INITIALIZATION

let click = true
let color = 'black'
let backgroundColor = 'white'
let DEFAULT_RESOLUSTION = 50

//-------------------------------------
function populated (size) {
  const canvas = document.querySelector('.canvas')
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let index = 0; index < size * size; index++) {
    let cell = document.createElement('div')
    //coloring
    cell.addEventListener('mouseover', cellColor)
    cell.className = 'canvas-cell'
    cell.style.backgroundColor = backgroundColor
    canvas.insertAdjacentElement('beforeend', cell)
  }
}

populated(DEFAULT_RESOLUSTION)

function setsize (size) {
  if (size >= 2 && size <= 100) {
    resetCanvas()
    populated(size)
  } else {
    alert('Please enter a number between 2 and 100')
  }
}


function bgColor(choice){
  backgroundColor = choice;
}

function cellColor () {
  if (click) this.style.backgroundColor = color
}

function changeColor (choice) {
  color = choice
}

function resetCanvas () {
  const cells = document.querySelectorAll('.canvas-cell')
  cells.forEach(cell => {
    cell.style.backgroundColor = backgroundColor
    if (click == false) {
      //false => true in order the "click = !click" will turn it into false
      click = true
    }
  })
}

document.querySelector('body').addEventListener('click', () => {
  click = !click
})

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'classic', // or 'monolith', or 'nano'

  swatches: [
    'rgba(244, 67, 54, 1)',
    'rgba(233, 30, 99, 0.95)',
    'rgba(156, 39, 176, 0.9)',
    'rgba(103, 58, 183, 0.85)',
    'rgba(63, 81, 181, 0.8)',
    'rgba(33, 150, 243, 0.75)',
    'rgba(3, 169, 244, 0.7)',
    'rgba(0, 188, 212, 0.7)',
    'rgba(0, 150, 136, 0.75)',
    'rgba(76, 175, 80, 0.8)',
    'rgba(139, 195, 74, 0.85)',
    'rgba(205, 220, 57, 0.9)',
    'rgba(255, 235, 59, 0.95)',
    'rgba(255, 193, 7, 1)'
  ],

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  }
})

pickr.on('save', (ColorPicker, instance) => {
  color = ColorPicker.toHEXA()
})

