
  function josephus(items, k){
    var result = [], index = 0;
    while (items.length > 0){
      index = (index + k - 1) % items.length;
      // console.log(index)
      result = result.concat(items.splice(index, 1));
    }
    return result;
  }

// console.log(josephus([true, false, true, true, false, false, true], 3))
// console.log(josephus([1, 3, 4, 5, 6, 7, 8], 3))


// ------------------------------------------------------------------------------------------------- //

// function isSolved(board) {

//   let solutions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]
//   let flattentedBoard = board.flat()

//   for(let i = 0; i < solutions.length; i++){
//     let currSolutionSeg = solutions[i]
//     for(let j = 0; j < currSolutionSeg.length; j++){
//       if()
//     }
//     }
//   }
// }

// ------------------------------------------------------------------------------------------------- //

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
//   if (dolphin) {
//     sharkSpeed = (sharkSpeed / 2)
//   }

//   const youTime = pontoonDistance / youSpeed
//   const sharkTime = sharkDistance / sharkSpeed

//   // console.log('youTime:', youTime, 'sharkTime:', sharkTime)

//   // if (youTime < sharkTime) === true, return 'Alive!' else return Shark Bait!'
//   return youTime < sharkTime ? 'Alive!' : 'Shark Bait!'

// }

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