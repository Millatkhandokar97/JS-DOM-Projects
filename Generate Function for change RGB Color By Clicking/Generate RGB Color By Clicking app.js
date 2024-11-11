//Generate Function for change RGB Color By Clicking

/**
 * Project Requirements:
 * - Generate Function for change RGB Color By Clicking
 */

//Steps

//Step 1 - create onload handler
window.onload = () => {
    // console.log("page is fully loaded");
    main()
  };
function main() {
    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn')

    btn.addEventListener('click', function() {
        const bgColor = generateRGBColor()
        root.style.backgroundColor = bgColor
    })
}
//Step 2 - random color enerator function
function generateRGBColor() {
    // rgb(0, 0, 0), rgb(255, 255, 255)

    const one = Math.floor(Math.random() * 255)
    const two = Math.floor(Math.random() * 255)
    const three = Math.floor(Math.random() * 255)
    // console.log(one, two, three);
    return `rgb(${one}, ${two}, ${three})`

}

// Step 3 - collect all necessary references
// const one = Math.floor(Math.random() * 255)
// const two = Math.floor(Math.random() * 255)
// const three = Math.floor(Math.random() * 255)

//Step 4 - handle the click event