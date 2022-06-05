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