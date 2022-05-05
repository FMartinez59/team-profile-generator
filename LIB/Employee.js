class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
        console.log(`Employee name is ${this.name}`)
    }

    getId() {
        return this.id
        console.log(`Employee name is ${this.id}`)
    }
    //returns employee
    getRole() {
    return "Employee"
    }
}
module.exports = Employee