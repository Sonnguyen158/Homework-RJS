/* Bai1: Hãy tạo 1 thẻ div có các event sau:

Khi di chuột vào thẻ div: console log ra Hover lúc: ${currentTime}

Trong đó currentTime là thời gian tại thời điểm hover vào theo format DD-MM-YYYY hh:mm:ss
Vd: Hover lúc 20-12-2020 18:35:26
Khi di chuột ra khỏi thẻ div: console log ra Out hover lúc ${currentTime}

currentTime là thời gian hiện tại như mô tả bên trên */

const getDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${date}-${month}-${year}  ${hour}:${minute}:${second}`
}

const overMouse = () => {
  console.log(`Hover lúc: ${getDate()}`)
}

const outMouse = () => {
  console.log(`Out hover lúc: ${getDate()}`)
}

/* Bai2: Tạo 1 ô input text nhập account với yêu cầu sau:
Chỉ cho phép nhập vào các ký tự từ a-z (chữ thường), và các số từ 0-9, và dấu gạch dưới
Nếu có ký tự không hợp lệ, hãy alert cho người dùng biết cần phải nhập đúng */

const validateAccount = ev => {
  const regex = /^[a-z0-9\_]{1,}/
  if(!regex.test(ev.target.value)) {
    alert('Kí tự không hợp lệ!')
  }
}

/* Bai3: Tạo 1 ô input number để nhập số tiền
Các ký tự được phép sử dụng là 0-9
Số tiền không được phép âm
Số tiền nhập tối đa là 1000
Nếu có lỗi hãy alert ra lỗi phù hợp */

const checkMoney = money => {
  if (money < 0) {
    alert('Số tiền không được phép âm!')
  } else if (money > 1000) {
    alert('Số tiền phải nhỏ hơn 1000!')
  }
}

/* Bai4: Tạo 1 thẻ div
Khi double click vào thì alert double click */

const checkClick = () => alert('Double Click')

/* Bai5: Hãy viết 1 hàm, bắt sự kiện người dùng bôi đen 1 phần tử nào đó trên trang web
Hãy log ra nội dung đang được bôi đen ra màn hình console log */

const getText = () => {
  const selectedText = window.getSelection()
  console.log(selectedText.toString())
}

/* Bai6: Hãy Tạo 1 thẻ select có các item sau: apple, orange, banana
Mỗi lần chọn 1 item nào đó, hãy log ra màn hình console item vừa chọn */

const getItem = event => {
  const index = event.target.selectedIndex
  console.log(event.target.options[index].value)
}

