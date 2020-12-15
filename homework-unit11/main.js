// Bai1: Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp:
const createArr = (string, number) => {
  const arr = []
  for (let i = 0; i <= number; i++) {
    arr.push(string)
  }
  return arr

}

//C2:

const creArr = (string, number) => {
  const arr = []
  for (let i = 0; i < number; i++) {
    arr.unshift(string)
  }
  return arr

}

// Bai2: Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse():
const reverseArr = array => {
  const arr = []
  for (let i = 0; i < array.length; i++) {
    arr.unshift(array[i])
  }
  return arr

}


// Bai3: Xóa đi các giá trị được xem là sai:
const deleteItem = array => {
  const arr = []
  for (let i = 0; i < array.length; i++) {
    if ( array[i] ) {
      arr.push(array[i])
    }
  }
  return arr

}

//C2: Sử dụng filter:
const filterItem = arr => arr.filter(Boolean)


// Bai4: Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu:
const convertArray = arr => {
  const obj = {}
  arr.forEach( array => {
    obj[array[0]] = array[1]
  });
  return obj

}


// Bai5: Sắp xếp mảng tăng dần:
const sortArr = arr => arr.sort( (a, b) => a - b )


// Bai6: Kiểm tra input đầu vào có phải là object hay không?
const testObject = obj => {
  if (typeof(obj) === 'object' && !Array.isArray(obj)) {
    return true
  } else {
    return false
  }

}


// Bai7: Viết 1 hàm trả về các key+value (của 1 object) khác các key truyền vào:
const getNewObject = (object, arr) => {
  for (let key in object) {
    arr.forEach(item => {
      if(item === key) {
        delete object.key
      }
    })
  }
  return object
  
}


// Bai8: Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa:
const deleteArr = arr => {
  if ( arr.length >= 5 ) {
    arr.splice(1, 2)
  }
  return arr

}

// Bai9: 
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const createNewArr = students => {
  const newArr = []
  students.forEach(student => {
    const { name, score } = student
    if (score <= 5 || name.indexOf('Duy') > 0) {
      newArr.push('Fail')
    } else {
      newArr.push('Pass')
    }
  })
  return newArr
}