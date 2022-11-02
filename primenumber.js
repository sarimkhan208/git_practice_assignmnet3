function primeNumber(number) {

  let factors = 0;
  for (let i = 2; i <= number/2; i++) {
    if (number % i == 2) {
      factors++;
    }
  }
  if (factors == 0) {
    return true;
  } else {
    return false;
  }

}
let number = 16;
if (primeNumber(number) == true) {

  console.log("jfaskkfl");
} else {
  console.log(number+"is not a prime number");
}
