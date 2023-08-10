/*
1. Viết hàm kiểu ra một số có chia hết cho số còn lại không? Nếu có chia hết thì trả ra giá trị true, nếu không chia hết thì trả ra giá trị false 
2. Sử dụng hàm (1) để kiểm tra n1 có chia hết cho n2 không? Nếu n1 chia hết cho n2 thì xuất ra màn hình "{n1} chia hết cho {n2}" nếu không thì xuất ra "{n1} không chia hết cho {n2}"
*/
const chiaHet = (a, b) => {
  if (a % b == 0) {
    console.log(a, "Chia hết cho", b);
    return true;
  }
  console.log(a, "Không chia hết cho", b);
  return false;
};

console.log(`chiaHet`, chiaHet(5, 5));

// 3. Viết hàm tính diện tích hình chữ nhật. Sử dụng hàm để tính diện tích hình chữ nhật có chiều dài/rộng là (10,20); (13,20)

const hinhChuNhat = (a, b) => {
  return a * b;
};
console.log(hinhChuNhat(4, 5));

/*
4. Viết hàm kiểm tra một chuỗi có hợp lệ hay không? Nếu chuỗi hợp lệ thì trả ra giá trị true, nếu chuỗi không hợp lệ thì trả ra giá trị false. Chuỗi hợp lệ phải thoả mãn tất cả các điều kiện sau
    - Chuỗi có độ dài tối thiểu là 5 
    - Chuối có đội dài tối đa là 20
    - Chuỗi không chứa mã độc = "script"
    5. Sử dụng hàm (4) để kiểm tra "xinchao", "javascript" có hợp lệ hay không? Nếu hợp lệ thì xuất ra màn hình "chuỗi {chuoi} hợp lệ" nếu không thì xuất ra màn hình "chuỗi {chuoi} không hợp lệ".
*/

const checkText = (text) => {
  if (text.length < 5 || text.length > 20) {
    return false;
  }

  if (text.includes("script")) {
    return false;
  }

  return true;
};

const stringText = ["xinchao", "javascript"];

for (let t of stringText) {
  if (checkText(t)) {
    console.log(`chuỗi '${t}' hợp lệ`);
  } else {
    console.log(`chuỗi '${t}' không hợp lệ`);
  }
}
