// Hàm kiểm tra số nguyên tố
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Hàm xuất n số nguyên tố nhỏ nhất
function xuatNSoNguyenTo(n) {
  let currentNumber = 2;
  let count = 0;
  while (count < n) {
    if (isPrime(currentNumber)) {
      console.log(currentNumber);
      count++;
    }
    currentNumber++;
  }
}

xuatNSoNguyenTo(20);