// 1. Định nghĩa một mảng gồm các phần tử: 5,6,4,3,2,5, 7, 8, 9

let arr = [5, 6, 4, 3, 2, 5, 7, 8, 9];

// 2. Thêm vào mảng thêm các số 5,9,1

arr.push(5, 9, 1);
console.log(arr);

// 3. Xuất ra màn hình gía trị các số tại vị trí số 1,3,5 => kết quả là: 6,3,5

console.log(arr[1], arr[3], arr[5]);

// 4. Cập nhật giá trị tại vị trí số 2 trong mảng thành 60
arr[2] = 60;
console.log(arr);

// 5. Xuất ra độ dài của mảng

console.log(arr.length);
console.log(arr);
// 6. Xoá các phần tử ở vị trí 6,7,8 và 0,1,2 trong mảng

arr.splice(6, 3);
arr.splice(0, 3);
console.log(arr);

// 7. Xuất ra tất cả các số trong mảng theo cú pháp
//          - Giá trị tại vị trí thứ {i} là {a[i]}

for (let i = 0; i < arr.length; i++) {
  console.log(`Giá trị tại vị trí ${i}:`, arr[i]);
}

// 8. Viết hàm trả ra danh sách tất cả các số nhỏ hơn n và chia hết cho 6
//      - danhSachChiaHetCho6(n):[]
//      - Ví dụ: danhSachChiaHetCho6(15) sẽ trả ra một mảng [0,6,12]

function danhSachChiaHetCho6(n) {
  const ketqua = [];
  for (let i = 0; i < n; i++) {
    if (i % 6 === 0) {
      ketqua.push(i);
    }
  }
  return ketqua;
}
console.log(danhSachChiaHetCho6(15));

// 9. Viết hàm trả ra danh sách tất cả các số nhỏ hơn n và chia hết cho m
//      - danhSachChiaHet(n,m):[]
//      - Ví dụ: danhSachChiaHet(10,4) sẽ trả ra một mảng [0,4,8]

function danhSachChiaHet(n, m) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i % m === 0) {
      result.push(i);
    }
  }
  return result;
}

const ketQua = danhSachChiaHet(10, 4);
console.log(ketQua);

// 10. Viết hàm cộng tất c ả các phần tử trong mảng với n
//      - congMang(arr, n): []
//      - Đầu vào là một mảng và n
//      - Đầu ra là một mảng mà tất cả các số được cộng với n
//      - Ví dụ: arr = [1,2,3]; n=3
// - Kết quả trả ra của hàm: [4,5,6]

function congMang(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + n);
  }
  return result;
}

const n = 3;
const ketQ = congMang([1, 2, 3], n);
console.log(ketQ);
