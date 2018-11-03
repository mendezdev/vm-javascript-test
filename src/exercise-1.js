var Employee = function Employee() {
  this.firstName = '';
  this.lastName = '';
  this.salary = 0;
}

Employee.prototype.increaseSalary = function increaseSalary() {
  this.salary *= 1000;
}

Employee.prototype.showDetail = function showDetails() {
  var defaultStringValue = '-';
  var defaultNumberValue = 0;

  var detail = 'First Name: {0}\nLast Name: {1}\nSalary: {2}'
    .replace('{0}', this.firstName || defaultStringValue)
    .replace('{1}', this.lastName || defaultStringValue)
    .replace('{2}', this.salary || defaultNumberValue);

  console.log(detail);
}

// Sample 1
var employee1 = new Employee();
employee1.firstName = "Pablo"
employee1.lastName = "Mendez"
employee1.salary = 40000;

// before increase salary
employee1.showDetail()

// increasing salary
employee1.increaseSalary();

// after increase salary
employee1.showDetail()