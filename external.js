function data(){
let x = parseInt(prompt("Enter the Number: "))
let y = parseInt(prompt("Enter the Number: "))

let result = ''
let c = x + y
result += 'Add of two numbers is: ' + c
document.getElementById('data').innerText = result
}