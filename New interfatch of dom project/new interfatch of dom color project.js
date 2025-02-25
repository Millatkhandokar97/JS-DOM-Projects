/**
 * Date: 2-12-2024
 * Author: MD.Millat Khandokar
 * Descrption: Color picker application with huge dom functionalities
 */


// Globals
let toastContainer = null
const defaultColor = {
    red: 221,
    green: 222,
    blue: 238,
}
const defaultPresetColors = [
    '#ffcdd2',
    '#f8bbd0',
    '#F89DD0',
    '#FF93AB',
    '#ff8a80',
    '#EA4754',
    '#DF0000',
    '#00FFFF',
    '#00D1FF',
    '#00ACFF',
    '#007FE5',
    '#5861F8',
    '#0A32A9',
    '#00006D',
    '#4BFA77',
    '#4BDD77',
    '#4C8540',
    '#99BF37',
    '#DFDF8E',
    '#FCFF98',
    '#E3FF25',
    '#F3E74A',
    '#FCD713',
    '#FCB013',

]
let customColors = new Array(24)
const copySound = new Audio('./copy-paste.mp3')

//onload handler
window.onload = () => {
    main()
    updateColorCodeToDom(defaultColor)
    //display preset colors
    displayColorBoxes(document.getElementById('preset-colors'), defaultPresetColors)

    const customColorsString = localStorage.getItem('custom-colors')
    if(customColorsString){
        customColors = JSON.parse(customColorsString)
        displayColorBoxes(document.getElementById('custom-colors'), customColors)
    }
  };



// main or boot function, ths function will take care of getting all of the Dom references
function main() {
    // dom references
    const generateRandomColorBtn = document.getElementById('generate-random-color');
    const colorModeHexInp = document.getElementById('input-hex')
    const colorSliderRed = document.getElementById('color-slider-red')
    const colorSliderGreen = document.getElementById('color-slider-green')
    const colorSliderBlue = document.getElementById('color-slider-blue')
    const copyToClipboard = document.getElementById('copy-to-clipboard')
    const saveToCustom = document.getElementById('save-to-custom')
    const presetColorParent = document.getElementById('preset-colors')
    const customColorParent = document.getElementById('custom-colors')
    const bgPreview = document.getElementById('bg-preview')
    const bgFileInput = document.getElementById('bg-file-input')
    const bgFileInputBtn = document.getElementById('bg-file-input-btn')
    const bgFileDeleteBtn = document.getElementById('bg-file-delete-btn')
    bgFileDeleteBtn.style.display = 'none'
    const bgControllers = document.getElementById('bg-controllers')
    bgControllers.style.display = 'none'

    // event listeners
    generateRandomColorBtn.addEventListener('click', handleGenerateRandomColorBtn)

    colorModeHexInp.addEventListener('keyup', handleColorModeHexInp)

    colorSliderRed.addEventListener('change', handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue))
    colorSliderGreen.addEventListener('change', handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue))
    colorSliderBlue.addEventListener('change', handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue))
    copyToClipboard.addEventListener('click', handleCopyToClipboard)
    presetColorParent.addEventListener('click', handlePresetColorParent)
    saveToCustom.addEventListener('click', handleSaveToCustomBtn(customColorParent, colorModeHexInp))
    bgFileInputBtn.addEventListener('click', function(){
        bgFileInput.click()
    })
    bgFileInput.addEventListener('change', function(event){
        const file = event.target.files[0]
        const imgUrl = URL.createObjectURL(file)
        bgPreview.style.background = `url(${imgUrl})`
        document.body.style.background = `url(${imgUrl})`
        bgFileDeleteBtn.style.display = 'inline'
        bgControllers.style.display = 'block'
    })

    bgFileDeleteBtn.addEventListener('click', function(){
        bgPreview.style.background = 'none'
        bgPreview.style.backgroundColor = '#dddeee'
        document.body.style.background = 'none'
        document.body.style.backgroundColor = '#dddeee'
        bgFileDeleteBtn.style.display = 'none'
        bgControllers.style.display = 'none'
        bgFileInput.value = null
    })

    document.getElementById('bg-size').addEventListener('change', changeBackgroundPreferences)
    document.getElementById('bg-repeat').addEventListener('change', changeBackgroundPreferences)
    document.getElementById('bg-position').addEventListener('change', changeBackgroundPreferences)
    document.getElementById('bg-attachment').addEventListener('change', changeBackgroundPreferences)
}
// even handlers
function handleGenerateRandomColorBtn(){
    const color = generateColorDecimal()
    updateColorCodeToDom(color)
}

function handleColorModeHexInp(e){
    const hexColor = e.target.value;
    if(hexColor){
        this.value = hexColor.toUpperCase()
        if(isValidHex(hexColor)){
            const color = hexToDecimalColors(hexColor)
            updateColorCodeToDom(color)
        }
    }
}

function handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue){
    return function(){
        const color = {
            red: parseInt(colorSliderRed.value),
            green: parseInt(colorSliderGreen.value),
            blue: parseInt(colorSliderBlue.value)
        }
    
        updateColorCodeToDom(color)
    }
}

function handleCopyToClipboard(){
    const colorModeRadio = document.getElementsByName('color-mode')
    const mode = getCheckedValueFromRadios(colorModeRadio)
    if(mode === null){
        throw new Error('Invalid Radio Input')
    }
    if(toastContainer !== null){
        toastContainer.remove()
        toastContainer = null
    }

    if(mode === 'hex'){
        const hexColor = document.getElementById('input-hex').value
        if(hexColor && isValidHex(hexColor)){
            navigator.clipboard.writeText(`#${hexColor}`)
            generateToastMessage(`#${hexColor} Copied`)
        } else{
            alert('Invalid Hex Code')
        }
    } else {
        const rgbColor = document.getElementById('input-rgb').value
        if(rgbColor){
        navigator.clipboard.writeText(rgbColor)
        generateToastMessage(`${rgbColor} Copied`)
        } else{
            alert('Invalid RGB Color')
        }
    }

}

function handlePresetColorParent(event){
    const child = event.target
    if(child.className === 'color-box'){
        navigator.clipboard.writeText(child.getAttribute('data-color'))
        copySound.volume = 0.2
        copySound.play() 
    }
}

function handleSaveToCustomBtn(customColorsParent, inputHex){
    return function(){
    const color = `#${inputHex.value}`
    if(customColors.includes(color)) return
    customColors.unshift(color)
    if(customColors.length > 24){
        customColors = customColors.slice(0, 24)
    }
    localStorage.setItem('custom-colors', JSON.stringify(customColors))
    removeChildren(customColorsParent)
    displayColorBoxes(customColorsParent, customColors)
    }
}


// DOM function
/**
 * Generate a dynamic DOM element to show a toast message
 * @param {string} msg
 */

/**
 * 
 * @param {Array} nodes
 * @returns {string | null}
 */
function getCheckedValueFromRadios(nodes) {
    let checkedValue = null
    for (let i = 0; i < nodes.length; i++){
        if(nodes[i].checked){
            checkedValue = nodes[i].value;
            break;
        }
    }
    return checkedValue;
}

function generateToastMessage(msg){
    toastContainer = document.createElement('toastContainer')
    toastContainer.innerText = msg;
    toastContainer.className = 'toast-message toast-message-slide-in';
    
    toastContainer.addEventListener('click', function(){
        toastContainer.classList.remove('toast-message-slide-in')
        toastContainer.classList.add('toast-message-slide-out')
        
        toastContainer.addEventListener('animationend', function(){
            toastContainer.remove()
            toastContainer = null
        })
    })
    document.body.appendChild(toastContainer)
}

/**
 * update dom elements with calculated color values
 * @param {object} color
 */
function updateColorCodeToDom (color){
    const hexColor = generateHexColor(color)
    const rgbColor = generateRGBColor(color)

    document.getElementById('color-display').style.backgroundColor = `#${hexColor}`
    document.getElementById('input-hex').value = hexColor
    document.getElementById('input-rgb').value = rgbColor
    document.getElementById('color-slider-red').value = color.red
    document.getElementById('color-slider-red-label').innerText = color.red
    document.getElementById('color-slider-green').value = color.green
    document.getElementById('color-slider-green-label').innerText = color.green
    document.getElementById('color-slider-blue').value = color.blue
    document.getElementById('color-slider-blue-label').innerText = color.blue

}

/**
 * create a div element with class name color-box
 * @param {string} color
 * @returns {object}
 */
function generateColorBox(color) {
    const div = document.createElement('div')
    div.className = 'color-box'
    div.style.backgroundColor = color
    div.setAttribute('data-color', color)

    return div
}

/**
 * 
 * @param {object} parent 
 * @param {Array} colors 
 */
function displayColorBoxes(parent, colors){
    colors.forEach((color) =>{
        if(isValidHex(color.slice(1))){
        const colorBox = generateColorBox(color)
        parent.appendChild(colorBox)
        }
    })
}

/**
 * remove all children from parent
 * @param {object} parent 
 */
function removeChildren(parent){
 let child = parent.lastElementChild
 while(child){
    parent.removeChild(child)
    child = parent.lastElementChild
 }
}

function changeBackgroundPreferences () {
    document.body.style.backgroundSize = document.getElementById('bg-size').value
    document.body.style.backgroundRepeat = document.getElementById('bg-repeat').value
    document.body.style.backgroundPosition = document.getElementById('bg-position').value
    document.body.style.backgroundAttachment = document.getElementById('bg-attachment').value
}


// Utils

/**
 * generate and return an object of three color decimal values
 * @returns {object}
 */

function generateColorDecimal(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return {
        red,
        green,
        blue
    }
}

/**
 * take a color of three decimal values and return a hexadecimal color code
 * @param {object} color 
 * @returns {string}
 */

function generateHexColor({red, green, blue}) {

    const getTwoColorCode = (value) =>{
        const hex = value.toString(16)
        return hex.length === 1 ? `0${hex}` : hex
    }

    return `${getTwoColorCode(red)}${getTwoColorCode(green)}${getTwoColorCode(blue)}`.toUpperCase();
}


/**
 * take a color of three decimal values and return a rgb color code 
 * @param {object} color 
 * @returns {string}
 */
function generateRGBColor({red, green, blue}){
    //const {red, green, blue} = generateColorDecimal()
    return `rgb(${red}, ${green}, ${blue})`
}

/**
 * convert hex color to decimal colors
 * @param {string} hex 
 * @returns {object}
 */
function hexToDecimalColors(hex){
    const red = parseInt(hex.slice(0, 2), 16)
    const green = parseInt(hex.slice(2, 4), 16)
    const blue = parseInt(hex.slice(4), 16)

    return {
        red,
        green,
        blue,
    }
}


/**
 * validate hex color code
 * @param {string} color
 * @returns {boolean} 
 */

function isValidHex(color){
    if(color.length !== 6) return false

    return /^[0-9A-Fa-f]{6}/i.test(color)
}











// function App() {
//   const items = ['apple', 'banana', 'cherry'];
//   return (
//     <ul>
//       {items.map(item => (
//         <li>{item}</li>
//       ))}
//     </ul>
//   );
// }


// function App() {
//     const items = ['apple', 'banana', 'cherry'];
//     return (
//       <ul>
//         {items.map(item => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     );
//   }
  