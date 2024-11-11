function validatePIN(pin) {
  //Start coding here
  const regex = /^(\d{4}|\d{6})$/;
  return regex.test(pin);
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
