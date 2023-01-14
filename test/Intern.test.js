const Intern = require("../lib/Intern")

test ("Intern Test Sheet", () =>{
    const intern = new Intern ("name", "id", "email", "UCLA")
    expect(intern.school).toBe("UCLA")
    expect(intern.getSchool()).toBe("UCLA");
});