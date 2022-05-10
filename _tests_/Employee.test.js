const Employee = require("../LIB/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should instantiate an employee instance", () => {
      //arrange
      const employee = new Employee();
      //assert
      expect(typeof employee).toBe("object");
    });

    it("should set name via constructor arguments", () => {
      //arrange
      const name = "David";
      //ACT
      const employee = new Employee(name);
      //assert
      expect(employee.name).toBe(name);
    });

    it("should set id via constructor arguments", () => {
      //arrange
      const id = 100;
      //ACT
      const employee = new Employee("David", id);
      //assert
      expect(employee.id).toBe(id);
    });

    it("should set email via constructor arguments", () => {
      //arrange
      const email = "yahoo@gmail.com";
      //ACT
      const employee = new Employee("David", 100, email);
      //assert
      expect(employee.email).toBe(email);
    });
  });

  describe("Getter methods", () => {
    it("should get name via getName()", () => {
      //arrange
      const name = "David";
      //ACT
      const employee = new Employee(name, 100, "yahoo@gmail.com");
      const employeeName = employee.getName();
      //assert
      expect(employeeName).toBe(name);
    });
    it("should get id via getId()", () => {
      //arrange
      const id = 100;
      //ACT
      const employee = new Employee("David", id, "yahoo@gmail.com");
      const employeeId = employee.getId();
      //assert
      expect(employeeId).toBe(id);
    });
    it("should get email via getEmail()", () => {
      //arrange
      const email = "yahoo@gmail.com";
      //ACT
      const employee = new Employee("David", 100, email);
      const employeeEmail = employee.getEmail();
      //assert
      expect(employeeEmail).toBe(email);
    });
  });
});
