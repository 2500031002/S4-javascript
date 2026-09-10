// promise example

let promise = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve("Promise Resolved Successfully")
    }else{
        reject("Promise is Rejected")
    }
})
// Handling the promise
promise
.then((message) => {
    console.log(message)
})
.catch((message) => {
    console.log(message)
})

function getVerify(name){
    let promise = new Promise((resolve, reject) => {
        if(name != ""){
            resolve("Name of a Person is: " + name)
        } else{
            reject("Name should not be empty")
        }
    })
    return promise;
}

getVerify("Prakash")
.then(message => {
    console.log(message)
})
.catch(message => {
    console.log(message)
})

getVerify("")
.then(message => {
    console.log(message)
})
.catch(message => {
    console.log(message)
})


function getEven(number){
    return new Promise((resolve, reject) => {
        if(number % 2 == 0){
            resolve("Number is Even")
        } else {
            reject("Number is Odd")
        }
    });
}

async function checkEvenNumber(num){
    try{
        let result = await getEven(num);
        console.log(result)
    } catch(error){
        console.log(error)
    }
}
checkEvenNumber(14)
checkEvenNumber(25)