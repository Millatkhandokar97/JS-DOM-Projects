//Create A Multiple Converter From Scratch


window.onload = function () {
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
        },
        variants:{
            'squareKm:squareM':{
                formula: 'mutiply the area value by 1000000',
                calculation(n){
                    return n * 1000000
                },
            },
            'squareKm:squareMile':{
                formula: 'divide the area value by 2.59',
                calculation(n){
                    return n / 2.59                },
            },
            'squareKm:squareYard':{
                formula: 'mutiply the area value by 1196000',
                calculation(n){
                    return n * 1196000
                },
            },
            'squareKm:squareFoot':{ 
                formula: 'mutiply the area value by 10760000',
                calculation(n){
                    return n * 10760000
                },
            },
            'squareM:squareKm':{
                formula: 'divide the area value by 1e+6',
                calculation(n){
                    return n / new Number('1e+6')
                },
            },
            'squareM:squareMile':{
                formula: 'divide the area value by 2.59e+6',
                calculation(n){
                    return n / new Number('2.59e+6')
                },
            },
            'squareM:squareYard':{
                formula: 'mutiply the area value by 1.196',
                calculation(n){
                    return n * 1.196
                },
            },
            'squareM:squareFoot':{
                formula: 'mutiply the area value by 10.764',
                calculation(n){
                    return n * 10.764
                },
            },
            'squareMile:squareKm':{
                formula: 'mutiply the area value by 2.59',
                calculation(n){
                    return n * 2.59
                },
            },
            'squareMile:squareM':{
                formula: 'mutiply the area value by 2.59e+6',
                calculation(n){
                    return n * new Number('2.59e+6')
                },
            },
            'squareMile:squareYard':{
                formula: 'for an aproximate result, mutiply the area value by 3.098e+6',
                calculation(n){
                    return n * new Number('3.098e+6')
                },
            },
            'squareMile:squareFoot':{
                formula: 'for an aproximate result, mutiply the area value by 2.788e+7',
                calculation(n){
                    return n * new Number('2.788e+7')
                },
            },
            'squareYard:squareKm':{
                formula: 'divide the area value by 1.196e+6',
                calculation(n){
                    return n / new Number('1.196e+6')
                },
            },
            'squareYard:squareM':{
                formula: 'divide the area value by 1.196',
                calculation(n){
                    return n / 1.196
                },
            },
            'squareYard:squareMile':{
                formula: 'for an aproximate result, divide the area value by 3.098e+6',
                calculation(n){
                    return n / new Number('3.098e+6')
                },
            },
            'squareYard:squareFoot':{
                formula: 'mutiply the area value by 9',
                calculation(n){
                    return n * 9
                },
            },
            'squareFoot:squareKm':{
                formula: 'divide the area value by 1.076e+7',
                calculation(n){
                    return n / new Number('1.076e+7')
                },
            },
            'squareFoot:squareM':{
                formula: 'divide the area value by 10.764',
                calculation(n){
                    return n / 10.764
                },
            },
            'squareFoot:squareMile':{
                formula: 'for an aproximate result, divide the area value by 2.788e+7',
                calculation(n){
                    return n / new Number('2.788e+7')
                },
            },
            'squareFoot:squareYard':{
                formula: 'divide the area value by 9',
                calculation(n){
                    return n / 9
                },
            },
        },
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

let lastLeftSelectValue = ''
let lastRightSelectValue = ''

function main() {
    const categorySelect = document.getElementById('category-select')
    const leftSelect = document.getElementById('left-select')
    const rightSelect = document.getElementById('right-select')

    const converterKeys = Object.keys(converter).sort()
    removeAllChild(categorySelect)
    converterKeys.forEach((item) => {
        addOption(categorySelect, { value: item, text: converter[item].name })
    })

    //default category units
    updateCategoryChange(categorySelect, leftSelect, rightSelect)

    categorySelect.addEventListener('change', function () {
        updateCategoryChange(categorySelect, leftSelect, rightSelect)
    })

    leftSelect.addEventListener('change', function(event){
        if(event.target.value = rightSelect.value){
            const options = rightSelect.getElementsByTagName('option')
            for(let i = 0; i < options.length; i++){
                if(lastLeftSelectValue === options[i].value){
                    console.log(options[i].value, leftSelect);
                    options[i].selected = 'selected'
                    lastRightSelectValue = options[i].value
                    break;
                }
            }
        }
        lastLeftSelectValue = event.target.value
    })

    rightSelect.addEventListener('change', function(event){
        if(event.target.value = leftSelect.value){
            const options = leftSelect.getElementsByTagName('option')
            for(let i = 0; i < options.length; i++){
                if(lastRightSelectValue === options[i].value){
                    options[i].selected = 'selected'
                    lastLeftSelectValue = options[i].value
                    break;
                }
            }
        }
        lastRightSelectValue = event.target.value
    })
}

function addOption(parent, option) {
    const opt = document.createElement('option')
    opt.setAttribute('value', option.value)
    opt.innerText = option.text

    parent.appendChild(opt)
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

function updateCategoryChange(categorySelect, leftSelect, rightSelect) {
    const converterName = categorySelect.value;
    const units = converter[converterName].units
    const option = Object.keys(units)

    // handle left select
    removeAllChild(leftSelect)
    option.forEach((item) => {
        addOption(leftSelect, { value: item, text: units[item] })
    })
    lastLeftSelectValue = leftSelect.value

    // handle right select
    removeAllChild(rightSelect)
    option.forEach((item) => {
        addOption(rightSelect, {value: item, text: units[item] })
    })

    // change default option of right select
    rightSelect.getElementsByTagName('option')[1].selected = 'selected'
    lastRightSelectValue = rightSelect.value
}


function calculateValue(){
    
}