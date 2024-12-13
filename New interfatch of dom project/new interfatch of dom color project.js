/**
 * Date: 2-12-2024
 * Author: MD.Millat Khandokar
 * Descrption: Color picker application with huge dom functionalities
 */


// Globals
let toastContainer = null

//onload handler
window.onload = () => {
    // console.log("page is fully loaded");
    main()
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
    const colorModeRadio = document.getElementsByName('color-mode')

    // event listeners
    generateRandomColorBtn.addEventListener('click', handleGenerateRandomColorBtn)

    colorModeHexInp.addEventListener('keyup', handleColorModeHexInp)

    colorSliderRed.addEventListener('change', handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue))
    colorSliderGreen.addEventListener('change', handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue))
    colorSliderBlue.addEventListener('change', handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue))
    copyToClipboard.addEventListener('click', function(){
        const mode = getCheckedValueFromRadios(colorModeRadio)
        if(mode === null){
            throw new Error('Invalid Radio Input')
        }

        if(mode === 'hex'){
            const hexColor = document.getElementById('input-hex').value
            console.log('HexColor', hexColor);
            navigator.clipboard.writeText(`#${hexColor}`)
        } else {
            const rgbColor = document.getElementById('input-rgb').value
            navigator.clipboard.writeText(rgbColor)

        }

    })

}

    // copyBtn.addEventListener('click', function(){
    //     navigator.clipboard.writeText(`#${output.value}`)
    //     if(div !== null){
    //         div.remove()
    //         div = null
    //     }
    //     if (isValidHex(output.value)){
    //         generateToastMessage(`#${output.value} copied`)
    //     }else{
    //         generateToastMessage(`#${output.value} The hex code copied`)
    //     }
    // })

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
    if (color.length !== 6) return false

    return /^[0-9A-Fa-f]{6}/i.test(`#${color}`)
}
// changeBtn.addEventListener('click', function() {
    //     const color = generateColorDecimal();
    //     const hex = generateHexColor(color);
    //     const rgb = generateRGBColor(color);
    //     root.style.backgroundColor = hex;
    //     output.value = hex.substring(1);
    //     output2.value = rgb;
    // })

    // copyBtn.addEventListener('click', function(){
    //     navigator.clipboard.writeText(`#${output.value}`)
    //     if(div !== null){
    //         div.remove()
    //         div = null
    //     }
    //     if (isValidHex(output.value)){
    //         generateToastMessage(`#${output.value} copied`)
    //     }else{
    //         generateToastMessage(`#${output.value} The hex code copied`)
    //     }
    // })
    // copyBtn2.addEventListener('click', function(){
    //     navigator.clipboard.writeText(`#${output2.value}`)
    //     if(div !== null){
    //         div.remove()
    //         div = null
    //     }
    //     if (isValidHex(output2.value)){
    //         generateToastMessage(`${output2.value} copied`)
    //     }else{
    //         generateToastMessage(`${output2.value} The rgb code copied`)
    //     }
    // })