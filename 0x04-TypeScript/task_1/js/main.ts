interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    
    [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (
        firstName: string, lastName: string
    ): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
    new (firstName: string,
    lastName: string): Student;
}

interface Student {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName

    }
    workOnHomework(): string {
        return "currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
