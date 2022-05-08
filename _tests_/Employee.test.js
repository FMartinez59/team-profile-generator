const Employee = require('../LIB/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instantiate an employee instance", () => {
            //arrange
            const employee = new Employee();
            //act

            //assert
            expect(typeof(employee)).toBe("object");
        });
    });
});