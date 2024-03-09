const obj = {
  firstname: "John",
  lastname: "Sharma",
  getName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var setCompany = function (works, food) {
  console.log(this.getName() + " works at " + works + " eats " + food);
};

var displayDetails = setCompany.bind(obj, "Capgemini", "nothing")();

var displayNewDetails = setCompany.call(obj, "Capgemini", "rice");
var displayBrandNewDetails = setCompany.apply(obj, ["TCS", "chole bhature"]);

//Function currying
var setCompanyNew = function (name) {
  return function (food) {
    return function (works) {
      return name + " works at " + works + " eats " + food;
    };
  };
};

console.log(setCompanyNew("Jim Halpert")("Idli")("Tech Mahindra"));

//Prototypal Inheritance

let car = function (modelName) {
  this.modelName = modelName;
};

let toyota = new car("toyota");
console.log(toyota);

car.prototype.type = "Luxury";
console.log(toyota.type);
