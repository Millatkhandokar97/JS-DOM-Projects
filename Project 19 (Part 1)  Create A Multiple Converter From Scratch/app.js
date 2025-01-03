//Create A Multiple Converter From Scratch


window.onload = function(){
    main()
}

//globals

const converter = {
    area: {
        name: 'Area'
    },
    mass: {
        name: 'Mass'
    },
    length: {
        name: 'Length'
    },
    volume: {
        name: 'Volume'
    },
    time: {
        name: 'Time'
    },
    dataTransferRate: {
        name: 'Data Transfer Rate'
    },
    pressure: {
        name: 'Pressure'
    }

}

function main(){
   const categorySelect = document.getElementById('category-select')

   const converterKeys = Object.keys(converter).sort()
   removeAllChild(categorySelect)
   converterKeys.forEach((item)=>{
    addOption(categorySelect,{value: item, text: converter[item].name})
   })
}

function addOption(parent, option){
    const opt = document.createElement('option')
    opt.setAttribute('value', option.value)
    opt.innerText = option.text

    parent.appendChild(opt)
}

function removeAllChild(parent){
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}