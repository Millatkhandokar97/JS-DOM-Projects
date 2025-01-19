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
        },
        variants:{
            'second:minute':{
                formula: 'divide the time value by 60',
                calculation(n){
                    return n / 60
                },
            },
            'second:hour':{
                formula: 'divide the time value by 3600',
                calculation(n){
                    return n / 3600
                },
            },
            'second:day':{
                formula: 'divide the time value by 86400',
                calculation(n){
                    return n / 86400
                },
            },
            'second:week':{
                formula: 'divide the time value by 604800',
                calculation(n){
                    return n / 604800
                },
            },
            'second:month':{
                formula: 'divide the time value by 2628000',
                calculation(n){
                    return n / 2628000
                },
            },
            'second:year':{
                formula: 'divide the time value by 31557600',
                calculation(n){
                    return n / 31557600
                },
            },

            'minute:second':{
                formula: 'mutiply the time value by 60',
                calculation(n){
                    return n * 60
                },
            },
            'minute:hour':{
                formula: 'divide the time value by 3600',
                calculation(n){
                    return n / 60
                },
            },
            'minute:day':{
                formula: 'divide the time value by 1440',
                calculation(n){
                    return n / 1440
                },
            },
            'minute:week':{
                formula: 'divide the time value by 10080',
                calculation(n){
                    return n / 10080
                },
            },
            'minute:month':{
                formula: 'divide the time value by 43800',
                calculation(n){
                    return n / 43800
                },
            },
            'minute:year':{
                formula: 'divide the time value by 525960',
                calculation(n){
                    return n / 525960
                },
            },

            'hour:second':{
                formula: 'mutiply the time value by 3600',
                calculation(n){
                    return n * 3600
                },
            },
            'hour:minute':{
                formula: 'mutiply the time value by 3600',
                calculation(n){
                    return n * 60
                },
            },
            'hour:day':{
                formula: 'divide the time value by 24',
                calculation(n){
                    return n * 24
                },
            },
            'hour:week':{
                formula: 'divide the time value by 10080',
                calculation(n){
                    return n / 10080
                },
            },
            'hour:month':{
                formula: 'divide the time value by 43800',
                calculation(n){
                    return n / 43800
                },
            },
            'hour:year':{
                formula: 'divide the time value by 525960',
                calculation(n){
                    return n / 525960
                },
            },

            'day:second':{
                formula: 'mutiply the time value by 86400',
                calculation(n){
                    return n * 86400
                },
            },
            'day:minute':{
                formula: 'mutiply the time value by 1440',
                calculation(n){
                    return n * 1440
                },
            },
            'day:hour':{
                formula: 'mutiply the time value by 24',
                calculation(n){
                    return n * 24
                },
            },
            'day:week':{
                formula: 'divide the time value by 7',
                calculation(n){
                    return n / 7
                },
            },
            'day:month':{
                formula: 'divide the time value by 30.416666667',
                calculation(n){
                    return n / 30.416666667
                },
            },
            'day:year':{
                formula: 'divide the time value by 365',
                calculation(n){
                    return n / 365
                },
            },
            
            'week:second':{
                formula: 'mutiply the time value by 604800',
                calculation(n){
                    return n * 604800
                },
            },
            'day:minute':{
                formula: 'mutiply the time value by 1440',
                calculation(n){
                    return n * 1440
                },
            },
            'week:hour':{
                formula: 'mutiply the time value by 24',
                calculation(n){
                    return n * 24
                },
            },
            'week:week':{
                formula: 'divide the time value by 7',
                calculation(n){
                    return n / 10080
                },
            },
            'day:month':{
                formula: 'divide the time value by 30.416666667',
                calculation(n){
                    return n / 30.416666667
                },
            },
            'day:year':{
                formula: 'divide the time value by 365',
                calculation(n){
                    return n / 365
                },
            },
        },
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
    const leftInput = document.getElementById('left-input')
    const rightInput = document.getElementById('right-input')

    const leftSelect = document.getElementById('left-select')
    const rightSelect = document.getElementById('right-select')

    const converterKeys = Object.keys(converter).sort()
    removeAllChild(categorySelect)
    converterKeys.forEach((item) => {
        addOption(categorySelect, { value: item, text: converter[item].name })
    })

    // set default category units
    updateCategoryChange(categorySelect, leftSelect, rightSelect)

   
    categorySelect.addEventListener('change', function () {
        updateCategoryChange(categorySelect, leftSelect, rightSelect)
    })

    leftInput.addEventListener('keyup', function(event){
        if(event.target.value && !isNaN(event.target.value)){
            const converterName = categorySelect.value
            const variants = converter[converterName].variants
            const variantKey = `${leftSelect.value}:${rightSelect.value}`
            const variant = variants[variantKey]
            leftInput.value = Number(event.target.value)
            rightInput.value = variant.calculation(Number(event.target.value))
        
        } else{
            rightInput.value = ''
        }
    })
    
    rightInput.addEventListener('keyup', function(event){
        if(event.target.value && !isNaN(event.target.value)){
            const converterName = categorySelect.value
            const variants = converter[converterName].variants
            const variantKey = `${leftSelect.value}:${rightSelect.value}`
            const variant = variants[variantKey]
            rightInput.value = Number(event.target.value)
            leftInput.value = variant.calculation(Number(event.target.value))
        
        } else{
            leftInput.value = ''
        }
    })

    leftSelect.addEventListener('change', function(event){
        if(event.target.value === rightSelect.value){
            const options = rightSelect.getElementsByTagName('option')
            for(let i = 0; i < options.length; i++){
                if(lastLeftSelectValue === options[i].value){
                    options[i].selected = 'selected'
                    lastRightSelectValue = options[i].value
                    break;
                }
            }
        }
        lastLeftSelectValue = event.target.value
        calculateValue(categorySelect, leftSelect, rightSelect)
    })

    rightSelect.addEventListener('change', function(event){
        if(event.target.value === leftSelect.value){
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
        calculateValue(categorySelect, leftSelect, rightSelect)

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
    calculateValue(categorySelect, leftSelect, rightSelect)

}


function calculateValue(categorySelect, leftSelect, rightSelect){
    const leftInput = document.getElementById('left-input')
    const rightInput = document.getElementById('right-input')
    const formulaText = document.getElementById('formula-text')

    const converterName = categorySelect.value
    const variants = converter[converterName].variants
    const variantKey = `${leftSelect.value}:${rightSelect.value}`
    const variant = variants[variantKey]
    formulaText.innerText = variant.formula
    leftInput.value = 1
    rightInput.value = variant.calculation(1)

}

// আল্লা-হুম্মা ইবি আস্‌তাখীরুকা বিইলমিকা অ আস্‌তাক্‌দিরুকা বি কুদরাতিকা অ আসআলুকা মিন ফায্বলিকাল আযীম, ফাইন্নাকা তাক্‌দিরু অলা আক্‌দিরু অতা’লামু অলা আ’লামু অ আন্তা আল্লা-মুল গুয়ুব। আল্লা-হুম্মা ইন কুন্তা তালামু আন্না হা-যাল আমরা ( ) খাইরুল লি লি দীনি অ মাআশি অ আকিবাতি আমরি অ আ-জিলিহি অ আ-জিলিহ, ফাক্‌দুরহু লি, অ য়্যাসসিরহু লি, সুম্মা বা-রিক লি ফিহ। অ ইন কুন্তা তালামু আন্না হা-যাল আমরা শাররুল লি ফি দীনি অ মাআশি অ আ’-কিবাতি আমরি অ আ’-জিলিহি অ আ-জিলিহ, ফাস্বরিফহু আন্নি অস্বরিফনি আনহু, অক্বদুর লিয়াল খাইরা হাইসু কা-না সুম্মা রায্বযিনি বিহ। 