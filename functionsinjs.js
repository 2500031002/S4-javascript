/* Syntax of function in javascript

function <function-name>=([arguments-list]){
    body of the function

    [return expression/variable/function]
}
 calling a function
 [variable =] function-name([arguments-list])
*/

function greets(){
    console.log("Welcome to JavaScript Functions!")
}
greets();
//console.log(greets())

function add(x,y)
{
    console.log("Adding of two variables: ", x + y)
}
add(45,55)
add(58.36,91.23)
add('Hello ','World!')
add([1,2],[3,4])

function sum(x,y){
    return x + y
}

console.log(sum(45,55))
console.log(sum(58.36,91.23))
console.log(sum('Hello ','World!'))
console.log(sum([1,2],[3,4]))

//Function Expression

let sum1 = function (a,b){
    return a + b
}

console.log(sum1(58,47))

// Arrow Function

let mul = (a,b) => { return a * b}
console.log(mul(5,6))

// passing a function as argument to another function
//These type of functions called as callback functions

function wishes(){
    console.log("Wishes functions!")
}

function wish(){
    console.log('Wish function')
}

function greetings(callgreet){
    callgreet();
}
greetings(wishes)
greetings(wish)


// callback function with arguments

function add1(x,y){
    console.log("Addition of two numbers: ", x + y)
}

function multiply(x,y){
    console.log("Multiplication of two numbers: ", x * y)
}

function subtract(x,y){
    console.log("Subtraction of two numbers: ", x - y)
}

function calculator(x,y,operation){
    operation(x,y)
}

calculator(45,55,add1)
calculator(45,55,multiply)
calculator(45,55,subtract)