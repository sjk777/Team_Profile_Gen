
const Employee = require("../lib/Employee")

test ("Employee Test Sheet", () =>{
    const employee = new Employee("Sky", 1234, "sky@email.com")
    expect (employee.name).toBe("Sky")
    expect (employee.id).toBe(1234),
    expect (employee.email).toBe("sky@email.com");

    expect (employee.getName()).toBe("Sky")
    expect (employee.getId()).toBe(1234),
    expect (employee.getEmail()).toBe("sky@email.com");
})