// Transform User Input in Javascript DOM


/**
 * Project Requirements:
 * - Generate Function for change RGB Color By Clicking
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 * - Add a toast message when copied
 * - user can type their own hex code too
 */

//Steps

let div = null

//Step 1 - create onload handler
window.onload = () => {
    // console.log("page is fully loaded");
    main()
  };
function main() {
    const root = document.getElementById('root')
    const changeBtn = document.getElementById('change-btn')
    const output = document.getElementById('output')
    const copyBtn = document.getElementById('copy-btn')


    changeBtn.addEventListener('click', function() {
        const bgColor = generateHexColor()
        root.style.backgroundColor = bgColor
        output.value = bgColor.substring(1)
    })

    // copyBtn.addEventListener('click', function(){
    //     navigator.clipboard.writeText(`#${output.value}`)
    //     if(div !== null){
    //         div.remove()
    //         div = null
    //     }
    //     if (isValidHex(output.value)){
    //         generateToastMessage(`#${output.value} copied`)
    //     }else{
    //         alert('Invalid Color Code')
    //     }
    // })

    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(`#${output.value}`)
        if(div !== null){
            div.remove()
            div = null
        }
        if (isValidHex(output.value)){
            generateToastMessage(`#${output.value} copied`)
        }else{
            alert('Invalid Color Code')
        }
    })
    
    output.addEventListener('keyup', function(e){
        const color = e.target.value
        if(color){
            output.value = color.toUpperCase()
            if(color && isValidHex(color)){
                root.style.backgroundColor = `#${color}`
            }
        }
    })
}
//Step 2 - random color enerator function
function generateHexColor() {

    const one = Math.floor(Math.random() * 255)
    const two = Math.floor(Math.random() * 255)
    const three = Math.floor(Math.random() * 255)
    return `#${one.toString(16)}${two.toString(16)}${three.toString(16)}`;

}

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

    color = color.substring(2)
    return /^[0-9A-Fa-f]{6}/i.test(color)
}

// Step 3 - collect all necessary references

//Step 4 - handle the click event

//Step 5 - handle the copy button click event

//Step 6 - activate toast message

//Step 7 - create a dynamic toast message

//Step 8 - clear toast message

//Step 9 - create isValid function

//Step 10 - implement change handler on input field

//Step 11 - prevent copying hex code if it is not valid

//Step 12 - 
