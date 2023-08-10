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
