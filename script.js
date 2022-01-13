var slideBar = document.getElementById("sizeSlider")
var slidetext = document.getElementById("sliderValue")
var canvas = document.getElementById("canvas")
var paintColorPicker = document.getElementById("colorPicker")
var div = canvas.childNodes;
var paintColor = "#333"
var currentMode = "color"

function createDivs(col, row){
  for(var index = 0; index < (col * row); index++){
    const div = document.createElement("div")
    div.style.border = `1px solid black`
    div.addEventListener('click', changeColor)
    canvas.style.gridTemplateColumns = `repeat(${col}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${row}, 1fr)`
    canvas.appendChild(div).classList.add('shadow')
  }
}
function changeColor(e) {
  if (currentMode == 'rainbow') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } else if (currentMode == 'color') {
    e.target.style.backgroundColor = paintColor
  } else if (currentMode == 'eraser') {
    e.target.style.backgroundColor = "#fff"
  }
}
function clearGrid(){
  canvas.innerHTML = '';
  slidetext.innerText = "None"
  slideBar.value = 0
}
function updateGrids(value){
  slidetext.innerText = value + " x " + value;
  canvas.innerHTML = '';
  createDivs(value, value)
}
function setMode(mode){
  currentMode = mode
}
function setColor(value){
  paintColor = value
}
function showBorder(){
  const childern = canvas.childNodes;
  childern.forEach(item => {
    if(item.style.borderWidth == '1px'){
      item.style.borderWidth = '0px'
    } else {
      item.style.borderWidth = '1px'
    }
    console.log(item.innerText);
  });
}