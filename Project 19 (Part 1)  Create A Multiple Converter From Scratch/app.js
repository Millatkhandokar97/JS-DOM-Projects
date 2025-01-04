//Create A Multiple Converter From Scratch


window.onload = function(){
    main()
}

//globals

const converter = {
    area: {
        name: 'Area',
        units: {
            squareKm: 'Square Kilometer',
            squareM: 'Square Meter',
            squareMile: 'Square Mile',
            squareYard: 'Square Yard',
            squareFoot: 'Square Foot'
        }
    },
    mass: {
        name: 'Mass',
        units: {
            tonne: 'Tonne',
            kilogeam: 'Kilogram',
            gram: 'Gram',
            milligram: 'Milligram'
        }
    },
    length: {
        name: 'Length',
        units: {
            kilometer: 'Kilometer',
            meter: 'Meter',
            centimeter: 'Centimeter',
            millimeter: 'Millimeter'
        }
    },
    volume: {
        name: 'Volume'
    },
    time: {
        name: 'Time',
        units: {
            second: 'Second',
            minute: 'Minute',
            hour: 'Hour',
            day: 'Day',
            week: 'Week',
            month: 'Month'
        }
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
   const leftSelect = document.getElementById('left-select')
   const righrSelect = document.getElementById('right-select')

   const converterKeys = Object.keys(converter).sort()
   removeAllChild(categorySelect)
   converterKeys.forEach((item)=>{
    addOption(categorySelect,{value: item, text: converter[item].name})
   })

   // handle left select
   const converterName = categorySelect.value
   removeAllChild(leftSelect)

   // handle right select
   removeAllChild(righrSelect)
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