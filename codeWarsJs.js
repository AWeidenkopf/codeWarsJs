
function josephus(items, k) {
  var result = [], index = 0;
  while (items.length > 0) {
    index = (index + k - 1) % items.length;
    // console.log(index)
    result = result.concat(items.splice(index, 1));
  }
  return result;
}

// console.log(josephus([true, false, true, true, false, false, true], 3))
// console.log(josephus([1, 3, 4, 5, 6, 7, 8], 3))

// ------------------------------------------------------------------------------------------------- //

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) {
    sharkSpeed = (sharkSpeed / 2)
  }

  let youTime = pontoonDistance / youSpeed
  let sharkTime = sharkDistance / sharkSpeed

  return youTime < sharkTime ? 'Alive!' : 'Shark Bait!'

}

// console.log(shark(12, 50, 4, 8, true))

// ------------------------------------------------------------------------------------------------- //

// let peak = 0;
// let left = []
// let right = []
// for (let i = 0; i < arr.length; i++) {
//   let currEl = arr[i];
//   if (currEl > peak) {
//     peak = currEl
//     peakIndex = i;
//   }
//   if(i > peakIndex){
//     right.push(arr[i]);
//   } else if(i <= peakIndex) {
//     left.push(arr[i])
//   }

//   if(left[i] >= left[i +1]) {
//     return false
//   }

//   if(right[i] <= right[i +1]){
//     return false
//   }

// console.log(peak)
// for(let i = 0; i < arr.length; i++){
//   if(i < peakIndex){
//   left.push(arr[i]);
// } else if(i  > peakIndex){
//   right.push(arr[i])
// }
// }
// console.log(left, right)

// for(let i = 0; i < left.length; i++){
//   if(left[i] >= left[i +1]) {
//     return false
// } 
// }

// for(let i = 0; i < right.length; i++){
//   if(right[i] <= right[i +1]){
//     return false
//   }
// }
// return true

// } return true


// };


// const validMountainArray = function (arr) {
//   let increasing = true
//   for (let i = 0; i < arr.length; i++) {
//     if (increasing && arr[i] == arr[i + 1]) {
//       return false
//     } else if (increasing && arr[i] < arr[i + 1]) {
//       increasing = false
//     } else if (!increasing && arr[i] <= arr[i + 1]) { // decreasing
//       return false
//     }
//   }
//   return true
// }

//  0 1 2 4 5 6 3 2 3 1 // return false, 2 <= 3
//  0 1 2 2 3 4 3 2 // return false, 2 == 2
//  0 1 2 3 4 5 4 3 2 1 // return true


// console.log(validMountainArray([1, 2, 3, 3, 4, 5, 6, 3, 2, 2]))

// ------------------------------------------------------------------------------------------------- //

function sockMerchant(n, arr) {
  let pairs = 0
  const socks = {}
  for (let i = 0; i < arr.length; i++) {
    socks[arr[i]] ? socks[arr[i]]++ : socks[arr[i]] = 1
    socks[arr[i]] % 2 === 0 && pairs++
  }
  return pairs
}

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

// ------------------------------------------------------------------------------------------------- //

function staircase(int) {
  let output = []
  for (let i = 1; i <= int; i++) {
    str = ''
    newStr = str.padEnd(i, '#')
    newStr = newStr.padStart(int, ' ')
    output.push(newStr)
  }
  return output
}

// console.log(staircase(5))

// ------------------------------------------------------------------------------------------------- //

function pageCount(n, p) {
  // put the number of pages (n) in pairs, where 1 is on the right side
  // find how many pages a person has to flip to get to the desired page (p)
  // if they open in the first page and if they open in the last page
  let book = []
  let countFromFirst = 0;
  let countFromLast = 0;

  for(let i = 0; i <= n; i+=2){
    book.push([i, i +1])
  }

  countFromFirst = book.findIndex(el => el.some(number => number === p))

  countFromLast = book.reverse().findIndex(el => el.some(number => number === p))

  if(countFromFirst < countFromLast){
    return countFromFirst
  } return countFromLast

}

// console.log(pageCount(5, 4))

// ------------------------------------------------------------------------------------------------- //
