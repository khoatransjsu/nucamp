class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp{
    constructor(name, level, students=[]) {
        this.name = name;
        this.email = email;
        this.students = students;
    }
    registerStudent(student){
        let exist = this.students.filter(s => s.email === student.email);
        if(!exist){
            console.log(`Registering ${student.email} to the bootcamp Web Dev Fundamentals.`);
        }
        else{
            console.log(`This email has already been used.`);
        }

        return this.students;
    }
}
