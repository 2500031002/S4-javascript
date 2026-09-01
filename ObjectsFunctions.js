// Creating Object in javascript

let student = {
    id: 2500031002,
    name:"Perla Vamsi",
    course: "Front End Development Frameworks",
    year:2,
    address: {
        doorno: "504",
        city: "Vijayawada",
        state: "AP"
    }
}

// Accessing the properties of Object
// 1.using Dot notation
console.log("Student Id: ",student.id)
console.log("Student Name: ",student.name)

//2.using Bracket Notation
console.log("Course Name: ",student['course'])
console.log("Year: ",student['year'])

console.log("Address: ",student.address)
console.log("City: ", student.address.city)

// Creating an Object using new keyword

function Student(id,name, grade){
    this.id = id
    this.name = name;
    this.grade = grade;
}

let stu1 = new Student(2500031981, "Tanveer Pathan", "A+");
let stu2 = new Student(2500032413, "Ramulu", "O+");

console.log("Stu-1-Id: ",stu1.id);
console.log("Stu-1-Name: ",stu1.name);
console.log("Stu-2-Id: ",stu2.id);
console.log("Stu-2-Name: ",stu2.name);

//Define a class and create an object using new keyword
class Employee {
    constructor(id, name, designation, salary) {
        this.id = id
        this.name = name
        this.designation = designation
        this.salary = salary
    }
    display() {
        console.log("Employee Id: ", this.id)
        console.log("Employee Name: ", this.name)
        console.log("Employee Designation: ", this.designation)
        console.log("Employee Salary: ", this.salary)
    }
}
let emp1 = new Employee(5892,"Venkatesh","Asst.Prof",85000)
let emp2 = new Employee(9834,"Ramya","Assoc.Prof",125800)
emp1.display();
emp2.display();

// Adding the property  to an object dynamically

student.grade = "O"
console.log("Student Information after adding the grade property")
console.log(student)

// Deleting the Property from the object dynamically

delete student.address
console.log("Student Information after deleting the address property")
console.log(student)

