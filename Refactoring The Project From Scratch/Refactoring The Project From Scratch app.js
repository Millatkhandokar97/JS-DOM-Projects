//Refactoring The Project From Scratch in javascrpt DOM


/**
 * Project Requirements:
 * - Generate Function for change RGB Color By Clicking
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 * - Add a toast message when copied
 * - user can type their own hex code too
 * - show rgb color too, but do not need to edit it
 * - user cal also coppy the rgb color code
 */

//Steps

let div = null


window.onload = () => {
    // console.log("page is fully loaded");
    main()
  };
function main() {
    const root = document.getElementById('root')
    const changeBtn = document.getElementById('change-btn')
    const output = document.getElementById('output')
    const output2 = document.getElementById('output2')
    const copyBtn = document.getElementById('copy-btn')
    const copyBtn2 = document.getElementById('copy-btn2')


    changeBtn.addEventListener('click', function() {
        const color = generateColorDecimal();
        const hex = generateHexColor(color);
        const rgb = generateRGBColor(color);
        root.style.backgroundColor = hex;
        output.value = hex.substring(1);
        output2.value = rgb;
    })



    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(`#${output.value}`)
        if(div !== null){
            div.remove()
            div = null
        }
        if (isValidHex(output.value)){
            generateToastMessage(`#${output.value} copied`)
        }else{
            generateToastMessage(`#${output.value} The hex code copied`)
        }
    })
    copyBtn2.addEventListener('click', function(){
        navigator.clipboard.writeText(`#${output2.value}`)
        if(div !== null){
            div.remove()
            div = null
        }
        if (isValidHex(output2.value)){
            generateToastMessage(`#${output2.value} copied`)
        }else{
            generateToastMessage(`#${output2.value} The rgb code copied`)
        }
    })
    
    output.addEventListener('keyup', function(e){
        const color = e.target.value
        if(color){
            output.value = color.toUpperCase()
            if(color){
                root.style.backgroundColor = `#${color}`
                output2.value = hexToRgb(color)
            }
        }
    })
}

// function 1 - generate three random decimal number for red, green and blue
// return as an object

function generateColorDecimal(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return {
        red,
        green,
        blue,
    }
}

// function 2 - generate hex color code

function generateHexColor({red, green, blue}) {
    //const {red, green, blue} = generateColorDecimal()
    // const redValid = red.length <= 2 ? `0${red}` : red.toString(16)
    // const greenValid = green.length <= 2 ? `0${green}` : green.toString(16)
    //const blueValid = blue.length <= 2 ? `0${blue}` : blue.toString(16)

    const getTwoColorCode = (value) =>{
        const hex = value.toString(16)
        return hex.length === 1 ? `0${hex}` : hex
    }

    return `#${getTwoColorCode(red)}${getTwoColorCode(green)}${getTwoColorCode(blue)}`.toUpperCase();
}

// function 3 - generate rgb a color code
function generateRGBColor({red, green, blue}){
    //const {red, green, blue} = generateColorDecimal()
    return `rgb(${red}, ${green}, ${blue})`
}

/**
 * convert hex color to rgb
 * @param {string} hex 
 */
function hexToRgb(hex){
    const red = parseInt(hex.slice(0, 2), 16)
    const green = parseInt(hex.slice(2, 4), 16)
    const blue = parseInt(hex.slice(4), 16)

    return `rgb(${red}, ${green}, ${blue})`
}

console.log(hexToRgb('ffffff')
);

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
 * 
 * @param {string} color 
 */

function isValidHex(color){
    if (color.length !== 6) return false

    return /^[0-9A-Fa-f]{6}/i.test(`#${color}`)
}

//Step 1 - create onload handler

//Step 2 - random color enerator function

// Step 3 - collect all necessary references

//Step 4 - handle the click event

//Step 5 - handle the copy button click event

//Step 6 - activate toast message

//Step 7 - create a dynamic toast message

//Step 8 - clear toast message

//Step 9 - create isValid function

//Step 10 - implement change handler on input field

//Step 11 - prevent copying hex code if it is not valid

//Step 12 - refactor the color generator function

//Step 13 - update color code to display rgb colors

//Step 14 - create hex to rgb function

//Step 15 - update change handler

//Step 16 - implement copy function