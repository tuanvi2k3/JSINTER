// 1. Tính chu vi hình chữ nhật
function tinhChuViHinhChuNhat(chieuDai, chieuRong) {
  return 2 * (chieuDai + chieuRong);
}
console.log(tinhChuViHinhChuNhat(4, 9));

// 2. Tính diện tích hình chữ nhật
function tinhDienTichHinhChuNhat(chieuDai, chieuRong) {
  return chieuDai * chieuRong;
}
console.log(tinhDienTichHinhChuNhat(4, 9));

// 3. Xuất n số lẻ nhỏ nhất
function xuatNSoLeNhoNhat(n) {
  for (let i = 1; n > 0; i += 2) {
    console.log(i);
    n--;
  }
}
console.log(xuatNSoLeNhoNhat(9));

// 4. Xuất n số lẻ gần nhất bắt đầu từ m
function xuatNSoLeGanNhat(m, n) {
  let currentNumber = m % 2 === 0 ? m + 1 : m;
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(currentNumber);
    currentNumber += 2;
  }
  return result;
}

console.log(`xuatNSoLeGanNhat`, xuatNSoLeGanNhat(4, 9));

// 5. Kiểm tra số nguyên tố
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(`isPrime`, isPrime(5));

// 6. Xuất n số nguyên tố nhỏ nhất
function xuatNSoNguyenToNhoNhat(n) {
  for (let currentNumber = 2; n > 0; currentNumber++) {
    if (isPrime(currentNumber)) {
      console.log(currentNumber);
      n--;
    }
  }
}
xuatNSoNguyenToNhoNhat(5);

// 7. Trả ra danh sách tất cả số nhỏ hơn n
function nhoHon(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}
console.log(`nhoHon`, nhoHon(10));

// 8. Tìm vị trí phần tử đầu tiên trong mảng
function find(arr, chuoiCanTim) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === chuoiCanTim) {
      return i;
    }
  }
  return -1;
}

console.log(`find`, find([1, 5, 2, 4, 7], 7));

// 9. Tìm tất cả vị trí phần tử trong mảng
function filter(arr, chuoiCanTim) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === chuoiCanTim) {
      result.push(i);
    }
  }
  return result;
}

// 10. Định nghĩa một mảng nhân viên
const mangNhanVien = [
  { name: "Hieu", age: 30 },
  { name: "Tuan", age: 40 },
  { name: "Nam", age: 25 },
  { name: "Lan", age: 35 },
  { name: "Mai", age: 28 }
];

// 11. Sắp xếp tuổi nhân viên giảm dần
function sortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].age > arr[i].age) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 12. Tìm nhân viên có tuổi = x
function findNhanVienByAge(arr, age) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age === age) {
      return arr[i];
    }
  }
  return null;
}
