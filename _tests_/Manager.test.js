const Manager = require('../LIB/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set office NUmber via constructor Arguments", () => {
            //arrange
            const officeNumber = 404;
            //act
            const manager = ""
            //assert
            expect(typeof(employee)).toBe("object");
        });
       
    })

    describe("Getter methods", () => {
        it("should get role via getRole()", () => {
            //arrange
            const role = 'Manager';
            //ACT
            const manager = new Manager("David", 100, 'yahoo@gmail.com');
            const managerRole = Manager.getRole()
            //assert
            expect(employeeName).toBe(name);
        });
    })
});