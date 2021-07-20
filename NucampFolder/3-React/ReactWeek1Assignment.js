class Student {
    
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    
    constructor (name, level, students=[]){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent (student){

        let exist = this.students.filter(o => o.email === student.email)[0];
        if(exist){
            console.log("This email has already been used");
        }
        else {           
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp Web Dev Fundamentals.`);
        }
    
        return this.students;
    }
}
