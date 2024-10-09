// Defining the Student interface

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creating two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Smith",
    age: 22,
    location: "Nairobi"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Machakos"
};

//An array for the two students
const studentList: Student[] = [student1, student2];

// Javascript Part for appending firstName and location on a table
const table = document.createElement('table');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const header1 = document.createElement('th');
header1.textContent = "First Name";
headerRow.appendChild(header1);

const header2 = document.createElement('th');
header2.textContent = "Location";
headerRow.appendChild(header2);

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody')

studentList.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell= document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);
