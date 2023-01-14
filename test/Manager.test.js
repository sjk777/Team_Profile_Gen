const Manager = require("../lib/Manager")

test ("Manager Test Sheet", () =>{
    const manager = new Manager ("name", "id", "email", "35")
    expect(manager.officeNumber).toBe("35")
    expect(manager.getOfficeNumber()).toBe("35");
})