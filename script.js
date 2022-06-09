function add(x, y){
    return x+y
}

function subtract(x, y){
    return x-y
}

function multiply(x, y){
    return x*y
}

function divide(x, y){
    return x/y
}

function operate(x, operator, y){
    if(operator === '+'){
        console.log(add(x, y))
    }

    if(operator === '-'){
        console.log(subtract(x, y))
    }

    if(operator === '*'){
        console.log(multiply(x, y))
    }

    if(operator === ':'){
        console.log(divide(x, y))
    }
}

let displayValue = []

let newNumber = ''

function createNumber() {
    let screen = document.querySelector('.screen');
    const one =  document.querySelector('#one')
    const two = document.querySelector('#two')
    const three = document.querySelector('#three')
    const four = document.querySelector('#four')
    const five = document.querySelector('#five')
    const six = document.querySelector('#six')
    const seven = document.querySelector('#seven')
    const eight = document.querySelector('#eight')
    const nine = document.querySelector('#nine')
    const zero =  document.querySelector('#zero')
    const dot = document.querySelector('#dot')

    one.addEventListener('click', () => {
        newNumber += '1'
        screen.innerHTML += '1'
    })

    two.addEventListener('click', () => {
        newNumber += '2'
        screen.innerHTML += '2'
    })

    three.addEventListener('click', () => {
        newNumber += '3'
        screen.innerHTML += '3'
    })

    four.addEventListener('click', () => {
        newNumber += '4'
        screen.innerHTML += '4'
    })

    five.addEventListener('click', () => {
        newNumber += '5'
        screen.innerHTML += '5'
    })

    six.addEventListener('click', () => {
        newNumber += '6'
        screen.innerHTML += '6'
    })

    seven.addEventListener('click', () => {
        newNumber += '7'
        screen.innerHTML += '7'
    })

    eight.addEventListener('click', () => {
        newNumber += '8'
        screen.innerHTML += '8'
    })

    nine.addEventListener('click', () => {
        newNumber += '9'
        screen.innerHTML += '9'
    })

    zero.addEventListener('click', () => {
        newNumber += '0'
        screen.innerHTML += '0'
    })

    dot.addEventListener('click', () => {
        screen.innerHTML += '.'
    })
}

function createOperator(){
    let equation = document.querySelector('.equation');
    let screen = document.querySelector('.screen');
    const divide = document.querySelector('#divide');
    const multiply = document.querySelector('#multiply');
    const add = document.querySelector('#add');
    const sub = document.querySelector('#sub');
    const clear = document.querySelector('#clear')
    const del = document.querySelector('#delete')
    const equals = document.querySelector('#equals')
    
    equals.addEventListener('click', () => {
        screen.innerHTML += '='
        equation.innerHTML += screen.innerHTML
    })

    clear.addEventListener('click', () => {
        screen.innerHTML = '';
        newNumber = ''
        displayValue = []
    })

    del.addEventListener('click', () => {
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1)
        newNumber = newNumber.substring(0, newNumber.length-1)
    })

    add.addEventListener('click', ()=> {
        screen.innerHTML += '+';
        displayValue.push(newNumber)
        newNumber = ''
        })
    
    sub.addEventListener('click', ()=> {
        screen.innerHTML += '-';
        displayValue.push(newNumber)
        newNumber = ''
        })
    
    divide.addEventListener('click', ()=> {
        screen.innerHTML += '÷';
        displayValue.push(newNumber)
        newNumber = ''
        })
    
    multiply.addEventListener('click', ()=> {
        screen.innerHTML += '⋅';
        displayValue.push(newNumber)
        newNumber = ''
        })
    
}

createNumber()

createOperator()


//create new function
//