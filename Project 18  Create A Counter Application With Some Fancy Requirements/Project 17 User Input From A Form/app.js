//Create A Counter Application With Some Fancy Requirements

window.onload = function(){
    main()
}

//globals
let result = 0

function main(){
    const output = document.getElementById('output')
    const incrementInp = document.getElementById('increment-inp')
    const incrementBtn = document.getElementById('increment-btn')
    const decrementInp = document.getElementById('decrement-inp')
    const decrementBtn = document.getElementById('decrement-btn')

    displayResult(output)

    incrementBtn.addEventListener('click', function(){
        const increment = parseInt(incrementInp.value)
        result += increment
        displayResult(output)
    })
    decrementBtn.addEventListener('click', function(){
        const decrement = parseInt(decrementInp.value)
        result -= decrement
        displayResult(output)
    })

    incrementInp.addEventListener('keyup', handleInp)
    decrementInp.addEventListener('keyup', handleInp)
}

function displayResult(output){
    if(result < 0){
        result = 0
        alert('Result Can\'t Be Negativ ')
    }
    let finalReult = result
    if(result <= 9){
        finalReult = `0${result}`
    }
    output.innerText = finalReult
}


function handleInp(e){
    if(parseInt(e.target.value) > 100){
        e.target.value = 100
    }

    if(parseInt(e.target.value) < 0){
        e.target.value = 0
    }
}