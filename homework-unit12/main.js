// Bai1: Hãy viết 1 hàm nhập vào 2 array, kiểm tra xem 2 array có khớp 100% các value với nhau về cả giá trị và index không:
const isEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  } 
  for (let i = 0; i < arr2.length; i++) {
    return arr1[i] === arr2[i]
  }
}


// Bai2: Viết 1 hàm, nhập vào 1 array nhiều chiều (không xác định số chiều) Hãy tạo thành array 1 chiều:
const flatten = arr => {
  const str = arr.join()
  return str.split(',')

}
//
const arrayFlatten = arr => {
  return arr.flat(Infinity)
}

// Bai3: Cắt nhỏ array thành nhiều đoạn, mỗi đoạn có n phần tử Viết 1 hàm, nhập vào 1 array 1 chiều và 1 số (vd là n) Hãy tạo array 2 chiều, với mỗi array con sẽ chứa n số trong array đã nhập:
const divArray = (arr, n) => {
  const newArr = []
  for (let i = 0; i < arr.length; i+=n) {
    newArr.push(arr.slice(i, i+n))
  }
  return newArr

}


// Bai4: Viết 1 hàm, nhập vào ít nhất 1 array. Tìm ra các phần tử xuất hiện trong tất cả các array truyền vào:
const intersection = (...arrays) => {
  if (!arrays.length) {
    return []
  }

  if (arrays.length === 1) {
    return arrays[0]
  }

  const result = []
  const[arr1, arr2] = arrays
  arr1.forEach(item1 => {
    arr2.forEach(item2 => {
      if(item1 === item2) {
        result.push(item1)
        arrays.splice(0, 2)
        const items = intersection(result, ...arrays)
        result = [...result, ...items]
      }
    })
  })

  return result
}

// Bai5: Sử dụng Date trong javascript:
const compareDate = (newData) => {
  const data = new Date(newData)
  const date = new Date(2020, 10, 30, 12, 30, 32, 0)
  if (data.getTime() > date.getTime()) {
    return 'after'
  } else if (data.getTime() < date.getTime()) {
    return 'before'
  } else {
    return 'equal'
  }

}


// Bai6: Viết regex để validate: Với email thì phải có định dạng email
const validateEmail  = (email) => {
  const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return reg.test(email)

}


// Bai7: Viết regex để validate: Với userName thì tối thiểu phải có 2 ký tự, tối đa 10 ký tự. Các ký tự được phép sử dụng là a-z (viết thường), các số từ 0-9 và dấu _. userName không được bắt đầu bằng số, và không được có 2 dấu _ đứng cạnh nhau.
const validateUser = (user) => {
  const reg = /^([a-zA-Z])([a-z0-9]{0,}[__]{0}[a-z0-9]+){1,9}$/
  return reg.test(user)

}
