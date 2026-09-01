// creating an Array using Array literal
let arr1 = [10, 20, 30, 40, 50]
console.log("Array-1: ", arr1)

let arr2 = ['Hello', 'World', 1,2,3, true, false,[11,12,13], 
            {id: 1, name: 'Jogendra', course: 'B.Tech'}]
console.log("Array-2: ")
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i], " ", typeof(arr2[i]))
}

// creating an Array using new keyword
let arr3 = new Array(10, 20, 30, 40, 50)
console.log("Array-3: ", arr3)

// Accessing the Array elements using index
console.log(arr2[3]) // 2
console.log(arr2[8].name) // Jogendra
console.log(arr2[7][1]) // 12

// modifying the Array elements using index
arr2[3] = 100
console.log("Modified Array-2: ", arr2)

// methods of Array
console.log("Length of Array-2: ", arr2.length)
// returns index of first occurrence of 100 in arr2
console.log("Index of 100 in Array-2: ", arr2.indexOf(100)) 
// returns -1 if element not found in arr2
console.log("Index of 1000 in Array-2: ", arr2.indexOf(1000)) 

let arr4 = [10, 20, 30, 40, 50]
// adding an element at the end of arr4
arr4.push(200)
console.log("Array-4 after adding 200 at the end: ", arr4)

// adding an element at the beginning of arr4
arr4.unshift(5)
console.log("Array-4 after adding 5 at the beginning: ", arr4)

// removing an element from the end of arr4
arr4.pop()
console.log("Array-4 after removing an element from the end: ", arr4)
// removing an element from the beginning of arr4
arr4.shift()
console.log("Array-4 after removing an element from the beginning: ", arr4)

// extracting a portion of arr4 and storing it in arr5
let arr5 = arr4.slice(1,4)
console.log("Array-5 after extracting a portion of Array-4: ", arr5)

// inserting an element at index 2 of arr4
arr4.splice(2,0,25)
console.log("Array-4 after inserting 25 at index 2: ", arr4)

// removing an element at index 3 of arr4
arr4.splice(3,2,75)
console.log("Array-4 after removing an element at index 3: ", arr4)

//includes() method returns true if the array contains a certain element, otherwise false
console.log("Does Array-4 contains 75? ", arr4.includes(75))
console.log("Does Array-4 contains 100? ", arr4.includes(100))

//join() method joins all the elements of an array into a string
console.log("Array-4 elements joined into a string: ", arr4.join('-'))

//concat() method is used to merge two or more arrays
let arr6 = [1,2,3]
let arr7 = [4,5,6]
let arr8 = arr5.concat(arr7)
console.log("Array-8 after merging Array-6 and Array-7: ", arr8)

// sort() method is used to sort the elements of an array
let arr9 = [5, 2, 9, 1, 5, 6]
console.log("Array-9 before sorting: ", arr9)
arr9.sort()
console.log("Array-9 after sorting: ", arr9)

// sort() for descending order
arr9.sort((a, b) => b - a)
console.log("Array-9 after sorting in descending order: ", arr9)

let students = [
    {id: 1, name: 'Alice', age: 20},
    {id: 2, name: 'Bob', age: 22},
    {id: 3, name: 'Charlie', age: 21},
    {id: 4, name: 'David', age: 23},
    {id: 5, name: 'Eve', age: 20}
]
console.log("Students Array: ", students)

students.sort((a,b) => b.id - a.id)
console.log("Students Array after sorting by id in descending order: ", students)

students.sort((a,b) => a.age - b.age)
console.log("Students Array after sorting by age in descending order: ", students)

//reverse() method is used to reverse the order of the elements in ana array
let arr10 = [1, 2, 3, 4, 5]
console.log("Array-10 before reversing: ", arr10)
arr10.reverse()
console.log("Array-10 after reversing: ", arr10)

//map() method is used to create a new array by applying a function to each element of the array
let arr11 = [1, 2, 3, 4, 5]
let arr12 = arr11.map(x => x * 2)
console.log("Array-11: ", arr11)
console.log("Array-12 after multiplying each element of Array-11 by 2: ", arr12)

//filter() method is used to create a new array with all elements that pass the test implemtation
let arr13 = [1, 2, 3, 4, 5]
let arr14 = arr13.filter(x => x % 2 == 0)
console.log("Array-13: ", arr13)
console.log("Array-14 after filtering even numbers from Array-13: ", arr14)

