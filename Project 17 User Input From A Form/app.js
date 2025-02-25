//Project 17 User Input From A Form


window.onload = function(){
    main()
}

function main(){
    const reserBtn = document.getElementById('reset-btn')
    const submitBtn = document.getElementById('submit-btn')
    const nameInp = document.getElementById('name-inp')
    const nameOutput = document.getElementById('name-output')
    const resultBody = document.getElementById('result-body')

    resultBody.style.display = 'none'

    reserBtn.addEventListener('click', function(){
        nameInp.value = ''
        resultBody.style.display = 'none'

    })
    submitBtn.addEventListener('click', function(){
        const name = nameInp.value

        if(!name){
            alert('Please provide a valid name')
        } else{
            resultBody.style.display = 'block'
            nameOutput.innerHTML = name
            nameInp.value = ''
        }
    })
}