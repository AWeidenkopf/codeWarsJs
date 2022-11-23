
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

  for (let i = 0; i <= n; i += 2) {
    book.push([i, i + 1])
  }

  countFromFirst = book.findIndex(el => el.some(number => number === p))

  countFromLast = book.reverse().findIndex(el => el.some(number => number === p))

  if (countFromFirst < countFromLast) {
    return countFromFirst
  } return countFromLast

}

// console.log(pageCount(5, 4))

// ------------------------------------------------------------------------------------------------- //


function factorial(n) {
  // This function returns the factorial of a given number.
  // You must set the parameters of the function yourself
  //  The input will be a positive integer greater than zero
  if (!n) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// console.log(factorial(6))

// ------------------------------------------------------------------------------------------------- //

const isPalindrome = function (head) {
  for (let i = 0; i < head.length; i++) {
    let currEl = head[i]
    let currEndEl = head[head.length - (i + 1)]

    if (currEl !== currEndEl) {
      return false
    }
  }
  return true
};

// console.log(isPalindrome([1,2]))

// ------------------------------------------------------------------------------------------------- //

const maximumWealth = function (accounts) {
  let customersTotalWealth = []

  // iterate through all accounts     
  accounts.forEach((account, idx) => {
    let sum = 0;
    // adding all of the account wealth 
    account.forEach(el => {
      sum += el
    })
    // then add to customers a tuple with the customer number and their total wealth         
    customersTotalWealth.push([idx + 1, sum])
  })

  // sort them by richest to poorest      
  customersTotalWealth.sort((a, b) => b[1] - a[1])

  //return the richest customer       
  return customersTotalWealth[0][1]

};

// console.log(maximumWealth([[1,2,3], [3,2,1]]))

// ------------------------------------------------------------------------------------------------- //

const canConstruct = function (ransomNote, magazine) {
  // create arrays of the string inputs so iteration is easier     
  let arrMagazine = magazine.split('')
  let arrRansomNote = ransomNote.split('')

  // iterate through the notes characters      
  for (let i = 0; i < arrRansomNote.length; i++) {
    // if magazine has the character          
    if (arrMagazine.indexOf(arrRansomNote[i]) !== -1) {
      // we remove it from magazine, meaning it's been already used
      console.log(arrMagazine.indexOf(arrRansomNote[i]))
      arrMagazine.splice(arrMagazine.indexOf(arrRansomNote[i]), 1)
      console.log(arrMagazine);
    } else {
      // if the magazine doesn't have the desired character, we return false 
      return false
    }
  }
  // else, if all of the necessary characters for the note were found, we return true     
  return true

};

// console.log(canConstruct('acc', 'abac'));

// ------------------------------------------------------------------------------------------------- //

const binarySearch = function (arr, target) {
  let first = 0
  let last = arr.length - 1

  while (first <= last) {
    let midPoint = Math.floor((first + last) / 2)

    if (arr[midPoint] === target) {
      return midPoint
    } else if (arr[midPoint] < target) {
      first = midPoint + 1
    } else {
      last = midPoint - 1
    }
  }
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 14));

// ------------------------------------------------------------------------------------------------- //


function solution(S) {
  // write your code in JavaScript (Node.js 14)
  let arr = S.split('')
  if (arr.length === 1) {
    return -1
  }
  let countH = 0;
  let countHyphen = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'H' && arr[i + 1] === '-') {
      if (arr[i + 2] === 'H') {
        arr.splice(i + 1, 1, 'T')
      } else if (arr[i + 2] === '-') {
        arr.splice(i + 1, 1, 'T')
      }
      i++
    }
  }
  let tanks = arr.filter(char => char === 'T')
  return tanks.length
}

// console.log(solution('HH-HH'))

// ------------------------------------------------------------------------------------------------- //

const unequalTriplets = function (nums) {

  let count = 0;
  let prev = 0;
  let len = nums.length

  let noDuplicates = nums.reduce((result, current) => {
    return result[current] = result[current] ? result[current] + 1 : 1, result
  }, {})

  for (occ of Object.values(noDuplicates)) {
    len -= occ;
    count += (prev * occ * len);
    prev += occ
  }
  return count
}

// console.log(unequalTriplets([3, 4, 1, 2]))

// ------------------------------------------------------------------------------------------------- //


const twoOutOfThree = function(nums1, nums2, nums3) {
  let newArr = [];
  newArr.push(...nums1.filter(num => nums2.includes(num) || nums3.includes(num)))
  newArr.push(...nums2.filter(num => nums3.includes(num)))
  // array Set returns a new obj of any type containing only unique values
  return Array.from(new Set(newArr))
};

function isInTwoArrays(nums1, nums2, nums3) {
  let result = []

  for(i = 0; i < nums1.length; i++) {
      if(nums2.includes(nums1[i]) || nums3.includes(nums1[i])) {
          result.push(nums1[i])
      }
  }

  for(j = 0; j < nums2.length; j++){
      if(nums3.includes(nums2[j])) {
          result.push(nums2[j])
      }
  }

  let noDuplicates = result.reduce((resultArr, curr) => {
      return resultArr.includes(curr) ? resultArr : resultArr.push(curr), resultArr
  }, [])

  return noDuplicates
}

function solution(nums1, nums2, nums3) {
let result = {}
nums1.forEach(el => {
    result[el] = 1 // {1: false, 3: false, 2: false}
})

nums2.forEach(el => {
    if (result[el] && (result[el] === 1 || result[el] === 4)) {
        result[el] = 4 // {1: false, 3: true, 2: true}    
    } else {
        result[el] = 2
    }
})

nums3.forEach(el => {
    if (result[el])
    result[el] += 8 // {1: false, 3: true, 2: true}
})

return Object.keys(result).filter(key => result[key] >= 4) // {1: false, 3: true, 2: true} => [3, 2]
};

// console.log(isInAllArrays([1,1,2,3,5], [5,2,3,4], [3,4]));

// ------------------------------------------------------------------------------------------------- //
