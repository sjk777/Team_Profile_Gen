const Engineer = require("../lib/Engineer");

test("Engineer Test Sheet", () => {
  const engineer = new Engineer("name", "id", "email", "gitUser");
  expect(engineer.gitHub).toBe("gitUser");
  expect(engineer.getGitHub()).toBe("gitUser");
});
