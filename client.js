console.log('Weekend Project');


let employeeArray = [];

class Employee {
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
}

$('document').ready(onReady);

function onReady() {
    console.log('Salary Calculator');
    $('#addEmployee').on('click', addEmployee);    
    $('#employeeList').on('click', '.deleteEmployee', deleteEmployee)    
}

function addEmployee() {
    event.preventDefault();
    console.log('Submitted');
    let firstNameIn = $('#firstName').val();
    let lastNameIn = $('#lastName').val();
    let idNumberIn = $('#idNumber').val();
    let jobTitleIn = $('#jobTitle').val();
    let annualSalaryIn = $('#annualSalary').val();
    let newEmployee = new Employee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn);
    employeeArray.push(newEmployee);
    console.log(employeeArray);
    appendEmployeeList();
}


function appendEmployeeList() {
    let element = $('#employeeList');
    element.empty();
    for (let employee of employeeArray){
        console.log(employee);
        element.append(`<tr> <td>${employee.firstName}</td> 
        <td>${employee.lastName}</td> 
        <td>${employee.idNumber}</td> 
        <td>${employee.jobTitle}</td> 
        <td>${employee.annualSalary}</td> <button class="deleteEmployee">Delete</button></tr>`);
    }
    }    


    function deleteEmployee() {
        console.log('Delete');
        let selectedEmployee = $(this).parent().text();
        console.log(selectedEmployee);
        for (let i = 0; i < employeeArray.length; i++) {
            if (selectedEmployee.includes(employeeArray[i].idNumber)) {
                console.log('Delete');
                employeeArray.splice(i, 1);
                $(this).parent().remove();
            }
            
        }
    }


    function averageCost() {
        let element2 = $('totalMonthly');
        element2.empty();
        for (let sum of employeeArray) {
            total += (sum.annualSalary)/12;
            console.log(total);
            
        }
        $('#totalMonthly').append(`${total}`);
    }