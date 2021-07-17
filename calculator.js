let currentNumber = ''
let operator 
let oldOp 
let ops 
let total = 0
let spec = false
let display = document.querySelector('#display')
let add = document.querySelector('#add')
let multiply = document.querySelector('#multiply')
let division = document.querySelector('#division')
let decimal = document.querySelector('#decimal')
let clear = document.querySelector('#clear')
let remainder = document.querySelector('#remainder')
let negative = document.querySelector('#negative')
let subtraction = document.querySelector('#subtraction')
let equals = document.getElementById('equals')

function handleNumberClick(num){
    if (parseFloat(currentNumber) >= 999999999 || total >= 999999999) {
        return 
    }
    currentNumber += num
    display.textContent = currentNumber 
    console.log(currentNumber)
    spec = false
}

function handleNumberKey(e){
    console.log(e.key)
    if(e.key >= 0 || e.key <= 9){
        if (parseFloat(currentNumber) >= 999999999 || total >= 999999999) {
            return 
        }
        currentNumber += e.key
        display.textContent = currentNumber 
        console.log(currentNumber)
        spec = false
    } switch(e.key){
        case '-': 
        console.log('hh')
        subtracting();
        spec = true
            break;
        case '+': 
        adds();
        spec = true
            break;
        case '*': 
        multiplies();
        spec = true
            break;
        case '/': 
        divide();
        spec = true
            break;
        case '.': 
        deci();
            break;
        case 'Backspace': 
        clean();
            break;
        case '%': 
        remained()
        spec = true
            break;
        case '=': 
        solve();
            break;
        case '`':
        neg();
            break;
        default:
            return
    }


}

function handleOperatorClick(){
    spec = true
}

let plus = (x,y) => {
    let added = x + y
    return added
}

let sub = (x,y) => {
    let subtract = x - y
    return subtract
}


let times = (x,y) => {
    let multiplied = x * y
    return multiplied
}

let divided = (x,y) => {
    if(y === 0){
        currentNumber = '0'
        total = 0
        return display.textContent = 'NO.'
    }
    let divided = x / y
    return divided
    
}

let remain = (x , y) => {
    let remain = x % y
    return remain
}



function adds() {
    operator = 'add'
    if(spec === false){
        compute()
    }
}

function subtracting() {
    operator = 'subtraction'
    console.log(total)
    if(spec === false){
        console.log('dd')
        compute()
    }
}


function multiplies() {
    operator = 'multiply'
    if(spec === false){
        compute()
    }
}

function divide() {
    operator = 'divide'
    console.log(total)
    if(spec === false){
        compute()
    }
}


function deci(){
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += '.'
    display.textContent = currentNumber
}

function clean(){
    currentNumber = ''
    total = ''
    operator = ''
    oldOp = ''
    display.textContent = '0'
}

function remained(){
    operator = 'remainder'
    if(spec === false){
        compute()
    }
}

function solve(){
    compute()
    display.textContent = total
    currentNumber = '0'
}

function neg() {
    if (currentNumber.includes('-')) {
        currentNumber = currentNumber.replace('-','')
        display.textContent = currentNumber
    } else if(display.textContent == total){
        currentNumber = '0'
        total *= -1
        display.textContent = total
        console.log(oldOp)
    } else {
        currentNumber = '-' + currentNumber
        display.textContent = currentNumber
        }
    
}

function compute() {

    if(oldOp === 'subtraction'){
        total = sub(total,parseFloat(currentNumber))
        display.textContent = total
        currentNumber = ''
    }
    else if (oldOp === 'add'){
        console.log(currentNumber)
        console.log(total)
        total = plus(total,parseFloat(currentNumber))
        display.textContent = total
        currentNumber = ''
    } else if(oldOp === 'multiply'){
        total = times(total,parseFloat(currentNumber))
        display.textContent = total
        currentNumber = ''
    } else if(oldOp === 'divide'){
        total = divided(total,parseFloat(currentNumber))
        display.textContent = total
        currentNumber = ''
    } else if(oldOp === 'remainder'){
        total = remain(total,parseFloat(currentNumber))
        display.textContent = total
        currentNumber = ''
    } else {
        total = parseFloat(currentNumber,10)
        currentNumber = ''
        display.textContent = total
        
    }

    if (parseFloat(currentNumber) > 999999999 || total > 999999999) {
        return display.textContent = 'ERROR'
    }
    oldOp = operator
    
}


add.addEventListener('click', adds)
multiply.addEventListener('click', multiplies)
division.addEventListener('click', divide)
decimal.addEventListener('click', deci)
clear.addEventListener('click', clean)
remainder.addEventListener('click', remained)
negative.addEventListener('click', neg)
subtraction.addEventListener('click', subtracting)
equals.addEventListener('click', solve)


window.onload = () => {
    let numbers = document.getElementsByClassName('num')
    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i]
        num.onclick = () => handleNumberClick(num.value)
    }

   let special = document.getElementsByClassName('operator')
    for(let i = 0; i < special.length; i++){
        specials = special[i]
        specials.onclick = () => handleOperatorClick(specials.value)
    } 

}

window.addEventListener('keydown', handleNumberKey);
