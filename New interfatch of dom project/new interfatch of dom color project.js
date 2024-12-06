/**
 * Date: 2-12-2024
 * Author: MD.Millat Khandokar
 * Descrption: Color picker application with huge dom functionalities
 */

// Globals
let div = null

//onload handler
window.onload = () => {
    // console.log("page is fully loaded");
    main()
  };

// main or boot function, ths function will take care of getting all of the Dom references
function main() {
    const generateRandomColorBtn = document.getElementById('generate-random-color');
    // const root = document.getElementById('root')
    // const changeBtn = document.getElementById('change-btn')
    // const output = document.getElementById('output')
    // const output2 = document.getElementById('output2')
    // const copyBtn = document.getElementById('copy-btn')
    // const copyBtn2 = document.getElementById('copy-btn2')

    generateRandomColorBtn('click', function(){
        const color = generateColorDecimal()
        updateColorCodeToDom(color)
    })

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
    
    // output.addEventListener('keyup', function(e){
    //     const color = e.target.value
    //     if(color){
    //         output.value = color.toUpperCase()
    //         if(color){
    //             root.style.backgroundColor = `#${color}`
    //             output2.value = hexToRgb(color)
    //         }
    //     }
    // })
}

// even handlers

// DOM function
function generateToastMessage(msg){
    div = document.createElement('div')
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';
    
    div.addEventListener('click', function(){
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')
        
        div.addEventListener('animationend', function(){
            div.remove()
            div = null
        })
    })
    document.body.appendChild(div)
}

/**
 * update dom elements with calculated color values
 * @param {object} color
 */
function updateColorCodeToDom (color){
    const hexColor = generateHexColor(color)
    const rgbColor = generateRGBColor(color)

    document.getElementById('color-display').style.backgroundColor = hexColor
    document.getElementById('color-mode-hex').value = hexColor
    document.getElementById('color-mode-rgb').value = rgbColor
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

    return `#${getTwoColorCode(red)}${getTwoColorCode(green)}${getTwoColorCode(blue)}`.toUpperCase();
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
