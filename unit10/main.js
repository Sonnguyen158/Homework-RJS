// Bài 1: In một bảng nhân của 1 số với các số từ 1-> 10 và hiển thị kết quả:	
function createMulTab(number) {
  if (typeof(number) !== 'number') {
    console.log ('Du lieu khong hop le')
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log ('  ' + number +  ' x ' + i + ' = ' + (number*i))
    }
  }
}


// Bài 2: Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In các số chẵn từ 1 đến n:
const getEvenNumber = n => {
  if (typeof(n) !== 'number' || n < 1 || n > 30) {
    console.log('Du lieu khong hop le')
  } else {
    for (let i = 2; i <= n; i++) {
      if ( !(i % 2) ) {
        console.log(i)
      }
    }
  }
}


// Bài 3: Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n:
const getSum = n => {
  let sum = 0  
  if (typeof(n) !== 'number' || n < 1 || n > 30) {
    console.log('Du lieu khong hop le')
  } else {
    for (let i = 1; i <= n; i++) {
      sum +=i
    }
  }
  return sum
}


// Bài 4: Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In ra n! (giai thừa của n):
const getFactorial = n => {
  let fac = 1
  if (typeof(n) !== 'number' || n < 1 || n > 30) {
    console.log('Du lieu khong hop le')
  } else {
    for (let i = 1; i <= n; i++) {
      fac = fac*i
    }
  }
  return fac
}


// Bài 5: Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn:
const getCountEven = arr => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if ( !( arr[i] % 2 ))
    count++
  }
  return count
}

// Bài 6: Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp:
const deleteDup = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// Bài 7: Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:
function createObj() {
  const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
  ]
  const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
  ]
  const students = []
}


// Bài 8: Tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất:
function getRank() {
  const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
  ]
  let maxScore = students[0].score
  let minScore = students[0].score
  let theBest
  let theBad

  for (let i = 0; i < students.length; i++) {
    if ( students[i].score > maxScore) {
      maxScore = students[i].score
    }
    if ( students[i].score < minScore) {
      minScore = students[i].score
    }
  }

  for (let i = 0; i < students.length; i++) {
    if(maxScore === students[i].score) {
      theBest = students[i]
    }
    if(minScore === students[i].score) {
      theBad = students[i]
    }
  }

  return {
    theBest,
    theBad
  }
}