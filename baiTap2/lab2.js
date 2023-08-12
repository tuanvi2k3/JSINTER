// 1. (1 điểm) Viết hàm xuất ra số finbonaci tại vị trí n
//     - finbonaci(n): number
//     - Đầu vào là vị trí n
//     - Đầu ra là giá trị số finbonaci tại vị trí n
//     - Ví dụ: Day finbonaci la: 1 1 2 3 5 8 thì finbonaci(5) = 5

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // Kết quả: 5

// 2. (1 điểm) Tính giai thừa của n. Biết rằng n! = 1*2*3*....*n
//     - giaiThua(n): number

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Kết quả: 120

// 3. (1 điểm) Viết thuật toán sắp xếp bubble sort
//     - function bubbleSort(arr: number[]): number[]
//     - Đầu vào là một mảng các số
//     - Đầu ra là một mảng các số đã được sắp xếp
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// 4. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm bubbleSort để sắp xếp lại và trả ra kết quả
const arr = [5, 4, 2, 7, 6];
bubbleSort(arr);
console.log(arr); // Kết quả: [2, 4, 5, 6, 7]

// 5. (1 điểm) Viết thuật toán tìm kiếm tuần tự
//     - function linearSearch(arr, soCanTim): number
//     - Đầu vào là một mảng các số & số cần tìm
//     - Đầu ra là vị trí số cần tìm
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// 6. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm linearSearch để tìm vị trí số 6 trong mảng

// 7. (2 điểm) Viết thuật toán tìm kiếm nhị phân
//     - function binarySearch(arr, soCanTim): number
//     - Đầu vào là một mảng các số & số cần tìm
//     - Đầu ra là vị trí số cần tìm

// 8. (1 điểm) Cho mang [5,4,2,7,6]
//     - Sử dụng hàm bubbleSort để sắp xếp lại
//     - Sử dụng hàm binarySearch để tìm ra vị trị số 7 trong mảng

// 9. (1 điểm) Tạo ra mảng từ 1 -> 1048576 tăng dần từ nhỏ tới lớn.
//     - Sử dụng hàm binarySearch để tìm ra vị trị số 1048576 trong mảng, in ra màn hình số lần so sánh của thuật toán
//     - 1048576 = 2 ^ 20 => Kiểm tra xem số lần so sánh có phải bằng 20 không?
