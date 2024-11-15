//Copy Color Code By Clicking A Button in javascript


/**
 * Project Requirements:
 * - Generate Function for change RGB Color By Clicking
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */

//Steps

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
        output.value = bgColor
    })

    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value)
    })
}
//Step 2 - random color enerator function
function generateHexColor() {
    // rgb(0, 0, 0), rgb(255, 255, 255)

    const one = Math.floor(Math.random() * 255)
    const two = Math.floor(Math.random() * 255)
    const three = Math.floor(Math.random() * 255)
    // console.log(one, two, three);
    return `#${one.toString(16)}${two.toString(16)}${three.toString(16)}`;

}

// Step 3 - collect all necessary references
// const one = Math.floor(Math.random() * 255)
// const two = Math.floor(Math.random() * 255)
// const three = Math.floor(Math.random() * 255)

//Step 4 - handle the click event

//Step 5 - handle the copy button click event