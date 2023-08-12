// Hàm xuất ra tin nhắn n lần
function xuatTinNhan(noiDung, soLan) {
  for (let i = 0; i < soLan; i++) {
    console.log(noiDung, i + 1);
  }
}

xuatTinNhan("Xin Chao", 8);

// Hàm tính tổng tất cả các số nhỏ hơn n
function tinhTong(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
console.log(`Sum`, tinhTong(10));

// Hàm tính tổng tất cả những số nhỏ hơn n và chia hết cho cả 2 và 3
function tinhTongChiaHetCho2Va3(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(tinhTongChiaHetCho2Va3(50));

// Hàm tính tổng tất cả những số nhỏ hơn n và chia hết cho cả a và b
function tinhTongChiaHet(n, a, b) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % a === 0 && i % b === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(tinhTongChiaHet(3, 4, 5));

// Hàm tính tổng n số lẻ nhỏ nhất
function tinhTongSoLe(n) {
  let sum = 0;
  let currentNumber = 1;
  for (let i = 0; i < n; i++) {
    sum += currentNumber;
    currentNumber += 2;
  }
  return sum;
}
console.log(tinhTongSoLe(10));

// Hàm tính tổng n số nhỏ nhất chia hết cho cả 2 và 3
function tinhTongNSoNhoNhatChiaHetCho2Va3(n) {
  let sum = 0;
  let currentNumber = 1;
  while (n > 0) {
    if (currentNumber % 2 === 0 && currentNumber % 3 === 0) {
      sum += currentNumber;
      n--;
    }
    currentNumber++;
  }
  return sum;
}
console.log(tinhTongNSoNhoNhatChiaHetCho2Va3(10));

// Hàm tính tổng n số nhỏ nhất chia hết cho cả a và b
function tinhTongNSoNhoNhatChiaHet(n, a, b) {
  let sum = 0;
  let currentNumber = 1;
  while (n > 0) {
    if (currentNumber % a === 0 && currentNumber % b === 0) {
      sum += currentNumber;
      n--;
    }
    currentNumber++;
  }
  return sum;
}
console.log(tinhTongNSoNhoNhatChiaHet(10, 15, 20));

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
