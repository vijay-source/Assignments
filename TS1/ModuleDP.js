function EmployeeDetails() {
  let name = "Mayank";
  let age = 30;
  let designation = "Developer";
  let salary = 10000;

  let calculateBonus = amount => {
    salary = salary + amount;
    return salary;
  };

  let getName = () => {
    return name;
  };
  return {
    age: age,
    designation: designation,
    calculateBonus: calculateBonus,
  };
}

let newEmployee = EmployeeDetails();

// console.log(newEmployee.name);
// console.log(newEmployee.salary);

let userName = newEmployee.calculateBonus(1000);

console.log(userName);
