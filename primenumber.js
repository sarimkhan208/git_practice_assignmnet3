function primeNumber(number) {

  let factors = 0;
  for (let i = 2; i <= number/2; i++) {
    if (number % i == 0) {
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

  console.log(number+"is a prime number");
} else {
  console.log(number+"is not a prime number");
}
