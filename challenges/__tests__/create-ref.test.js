const createRef = require("../create-ref");

describe("createRef", () => {
  test("check that the function returns an object", () => {
    const input = [];
    const actual = createRef(input);
    expect(typeof actual).toEqual("object");
  });
  test("check that the function can access the name and id property if passed one employee", () => {
    const employees = [{ name: "rose", id: "dS8rJns", secretFear: "spiders" }];
    const input1 = "name";
    const input2 = "id";
    const actual = createRef(employees, input1, input2);
    expect(actual).toEqual({ rose: "dS8rJns" });
  });
  test("check that the function works when passed multiple employees in the array", () => {
    const employees = [
      { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
      { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
      { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
      { name: "David", id: "og8r0nV", secretFear: "Rose" },
    ];
    const input1 = "name";
    const input2 = "id";
    const actual = createRef(employees, input1, input2);
    expect(actual).toEqual({
      Rose: "dS8rJns",
      Simon: "Pk34ABs",
      Jim: "lk1ff8s",
      David: "og8r0nV",
    });
  });
  test("check that it works when passed different inputs as second and third arguments", () => {
    const employees = [
      { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
      { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
      { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
      { name: "David", id: "og8r0nV", secretFear: "Rose" },
    ];
    const input1 = "secretFear";
    const input2 = "id";
    const actual = createRef(employees, input1, input2);
    expect(actual).toEqual({
      spiders: "dS8rJns",
      mice: "Pk34ABs",
      bears: "lk1ff8s",
      Rose: "og8r0nV",
    });
  });
  test("check that the function doesnt mutate inputs", () => {
    const employees = [
      { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
      { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
      { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
      { name: "David", id: "og8r0nV", secretFear: "Rose" },
    ];
    const input1 = "name";
    const input2 = "id";
    createRef(employees, input1, input2);
    expect(employees).toEqual([
      { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
      { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
      { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
      { name: "David", id: "og8r0nV", secretFear: "Rose" },
    ]);
    expect(employees[0]).toEqual({
      name: "Rose",
      id: "dS8rJns",
      secretFear: "spiders",
    });
  });
});
