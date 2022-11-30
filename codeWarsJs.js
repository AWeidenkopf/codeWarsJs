
function josephus(items, k) {
  var result = [], idxex = 0;
  while (items.length > 0) {
    idxex = (idxex + k - 1) % items.length;
    // console.log(idxex)
    result = result.concat(items.splice(idxex, 1));
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
//     peakidxex = i;
//   }
//   if(i > peakidxex){
//     right.push(arr[i]);
//   } else if(i <= peakidxex) {
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
//   if(i < peakidxex){
//   left.push(arr[i]);
// } else if(i  > peakidxex){
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
  // fidx how many pages a person has to flip to get to the desired page (p)
  // if they open in the first page and if they open in the last page
  let book = []
  let countFromFirst = 0;
  let countFromLast = 0;

  for (let i = 0; i <= n; i += 2) {
    book.push([i, i + 1])
  }

  countFromFirst = book.fidxidxex(el => el.some(number => number === p))

  countFromLast = book.reverse().fidxidxex(el => el.some(number => number === p))

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

const isPalidxrome = function (head) {
  for (let i = 0; i < head.length; i++) {
    let currEl = head[i]
    let currEndEl = head[head.length - (i + 1)]

    if (currEl !== currEndEl) {
      return false
    }
  }
  return true
};

// console.log(isPalidxrome([1,2]))

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
    if (arrMagazine.idxexOf(arrRansomNote[i]) !== -1) {
      // we remove it from magazine, meaning it's been already used
      console.log(arrMagazine.idxexOf(arrRansomNote[i]))
      arrMagazine.splice(arrMagazine.idxexOf(arrRansomNote[i]), 1)
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


const twoOutOfThree = function (nums1, nums2, nums3) {
  let newArr = [];
  newArr.push(...nums1.filter(num => nums2.includes(num) || nums3.includes(num)))
  newArr.push(...nums2.filter(num => nums3.includes(num)))
  // array Set returns a new obj of any type containing only unique values
  return Array.from(new Set(newArr))
};

function isInTwoArrays(nums1, nums2, nums3) {
  let result = []

  for (i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) || nums3.includes(nums1[i])) {
      result.push(nums1[i])
    }
  }

  for (j = 0; j < nums2.length; j++) {
    if (nums3.includes(nums2[j])) {
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

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-idxexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.



// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

const getConcatenation = function (nums) {
  return [...nums, ...nums]
};

// const getConcatenation = function(nums) {
//   nums.push(nums)
//   return nums
// };

// ------------------------------------------------------------------------------------------------- //

// Given a zero-based permutation nums (0-idxexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Example 1:

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows: 
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
// Example 2:

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]

const buildArray = function (nums) {
  let ans = []

  nums.forEach(el => {
    ans.push(nums[el])
  })

  return ans

};

// use map whenever i want to return an array of same length
// const buildArray = function(nums) {
//   return nums.map(el => nums[el])
// };

// ------------------------------------------------------------------------------------------------- //
// Convert the Temperature
// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// Note that:

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00
// Example 1:

// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
// Example 2:

// Input: celsius = 122.11
// Output: [395.26000,251.79800]
// Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.

const convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.80 + 32.00]
};
// ------------------------------------------------------------------------------------------------- //
// Running Sum
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

const runningSum = function (nums) {
  return nums.map((num, idx) => {
    return idx === 0 ? num : nums[idx] = nums[idx - 1] + nums[idx]
  })
};

// console.log(runningSum([1,2,3,4]));
// ------------------------------------------------------------------------------------------------- //
// Final Value of Variable After Performing Operations
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.



// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.
// Example 2:

// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.
const finalValueAfterOperations = function (operations) {
  let result = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes('-')) {
      result -= 1
    } else {
      result += 1
    }
  }
  return result
};
// ------------------------------------------------------------------------------------------------- //
//Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

const shuffle = function (nums, n) {
  let output = []
  for (let i = 0; i < n; i++) {
    output[2 * i] = nums[i];
    output[2 * i + 1] = nums[n + i];
  }
  return output;
};

// const shuffle = (nums, n) => nums.slice(0, n).flatMap((x, i) => [x, nums[i + n]])


// console.log(shuffle([2,5,1,3,4,7], 3));
// ------------------------------------------------------------------------------------------------- //
const numIdenticalPairs = function (nums) {
  let goodPairCount = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        goodPairCount++;
      }

    }
  }

  return goodPairCount;

};

// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
// ------------------------------------------------------------------------------------------------- //

const mostWordsFound = function (sentences) {
  let mostWords = 0;
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].split(' ').length > mostWords) {
      mostWords = sentences[i].split(' ').length
    }
  }
  return mostWords
};

// console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));

// const mostWordsFound = sentences => sentences.map(item => item.split(' ')).sort((a,b) => b.length - a.length)[0].length

// ------------------------------------------------------------------------------------------------- //


const minimumSum = function (num) {
  let sortedArr = num.toString().split('').sort((a, b) => a - b)
  return parseInt(sortedArr[0] + sortedArr[2]) + parseInt(sortedArr[1] + sortedArr[3])

};

// console.log(minimumSum([2932]))

// ------------------------------------------------------------------------------------------------- //

const kidsWithCandies = function (candies, extraCandies) {
  // first fidx the greastest value of candies in the array
  const max = Math.max(...candies);
  // then return an array where item will be true 
  // if the curr number + extra candies is equals or greater than max
  // and false
  // if the curr number + extra candies is equals or greater than max
  return candies.map(item => item + extraCandies >= max);
};

// console.log(kidsWithCandies([2,3,5,1,3], 3));

// ------------------------------------------------------------------------------------------------- //

const subtractProductAndSum = function (n) {
  let arr = n.toString().split('')

  let product = arr.reduce((result, curr) => result * curr)

  let sum = arr.reduce((result, curr) => parseInt(result) + parseInt(curr))

  return product - sum
};

// console.log(subtractProductAndSum(234));

// ------------------------------------------------------------------------------------------------- //

const smallerNumbersThanCurrent = function (nums) {
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++
      }
    }
    result.push(count)
  }
  return result
};

// ------------------------------------------------------------------------------------------------- //

// const interpret = function(command) {
//   let string = ''
//   let arr = command.split('')

//   for(let i = 0; i < arr.length; i++) {
//     console.log('i', arr[i]);
//       if(arr[i] === 'G'){
//           string += 'G'
//       } else if(arr[i] === '(') {
//           if(arr[i+1] === ')') {
//               string += 'o'
//               i++
//           } else {
//               string += 'al'
//               i+=3
//           }
//       }
//   }

//   return string
// };

const interpret = function (command) {
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
};

// console.log(interpret('G()()()(al)'))

// ------------------------------------------------------------------------------------------------- //
// Given two arrays of integers nums and idxex. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and idxex[i], insert at idxex idxex[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and idxex.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.



// Example 1:

// Input: nums = [0,1,2,3,4], idxex = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       idxex     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]
// Example 2:

// Input: nums = [1,2,3,4,0], idxex = [0,1,2,3,0]
// Output: [0,1,2,3,4]
// Explanation:
// nums       idxex     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]
// Example 3:

// Input: nums = [1], idxex = [0]
// Output: [1]

const createTargetArray = function (nums, idxex) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let currIdx = idxex[i]
    let currInt = nums[i]
    arr.splice(currIdx, 0, currInt)
  }
  return arr
};

// console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]))
// ------------------------------------------------------------------------------------------------- //

// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
// Example 2:

// Input: nums = [1,1,2,3]
// Output: [1,3,3]

const decompressRLElist = function (nums) {
  let decompressedList = []
  for (let i = 0; i < nums.length; i++) {
    let currPair = [nums[i], nums[i + 1]]
    for (let j = 0; j < currPair[0]; j++) {
      decompressedList.push(currPair[1])
    }
    i++
  }
  return decompressedList
};

// console.log(decompressRLElist([65,44,72,15]))

// ------------------------------------------------------------------------------------------------- //
// You are given a string s and an integer array idxices of the same length. The string s will be shuffled such that the character at the ith position moves to idxices[i] in the shuffled string.

// Return the shuffled string.



// Example 1:


// Input: s = "codeleet", idxices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

// Input: s = "abc", idxices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

const restoreString = function (s, idxices) {
  let arr = s.split('')
  let shuffled = []

  for (let i = 0; i < idxices.length; i++) {
    shuffled.push(arr[idxices.idxexOf(i)])
  }
  return shuffled.join('')
};

// console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]))

// ------------------------------------------------------------------------------------------------- //

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2)
}

// console.log("add", add("2", 3)); 

// ------------------------------------------------------------------------------------------------- //

function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr)
}

// console.log("sum", sum(2, 3, 4, 5, 6));

// ------------------------------------------------------------------------------------------------- //

function stringIncludes(strA, strB) {
  return strA.toLowerCase().includes(strB)
}

// console.log(
//   "stringIncludes",
//   stringIncludes("I drove to New York in a van with my friend", "new")
// );

// ------------------------------------------------------------------------------------------------- //

function getNames(arr) {
  let namearr = []
  arr.map(el => el.name ? namearr.push(el) : null)
  return namearr
}

// console.log(
//   "getNames",
//   getNames([
//     { a: 1 },
//     { name: "Jane" },
//     {},
//     { name: "Mark" },
//     { name: "Sophia" },
//     { b: 2 }
//   ])
// );

// ------------------------------------------------------------------------------------------------- //

function getLargestNumberidxex(arr) {
  arr.sort((a, b) => b - 1)
  return arr[0]
}

// console.log("getLargestNumberidxex", getLargestNumberidxex([7, 1, 4, 12, 9]));

// ------------------------------------------------------------------------------------------------- //

function delay(n) {
  setTimeout(() => {
  }, n)
}

// (async () => {
//   console.time("Testing delay");
//   await delay(1000);
//   console.timeEnd("Testing delay");
// })();

// ------------------------------------------------------------------------------------------------- //

const decodeMessage = function (key, message) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let alphabetArr = alphabet.split('')
  let keyWithoutSpace = key.replaceAll(' ', '')
  let keyArr = [...new Set(keyWithoutSpace)]
  let output = []
  let arrOfMessage = message.split('')

  arrOfMessage.map((char) => {
    console.log('char', char);
    if (char === ' ') {
      output.push(char)
    } else {
      let currCharindex = keyArr.indexOf(char)
      console.log(currCharindex);
      output.push(alphabetArr[currCharindex])
    }
  })

  return output.join('')
};

// console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"))
// ------------------------------------------------------------------------------------------------- //

// const sortSentence = function(s) {
//   return s.split(' ')
//   .sort((word1, word2) => word1[word1.length -1] - word2[word2.length -1])
//   .map((word, idx) => word.replace(idx +1, ''))
//   .join(' ')
// };


const sortSentence = function (s) {
  const words = s.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    const idx = word.split("").pop();
    result[idx - 1] = word.slice(0, -1);
  }

  return result.join(" ");
};

// console.log(sortSentence('is2 sentence4 This1 a3'))

// ------------------------------------------------------------------------------------------------- //



function exchangeCandy(aliceSizes, bobSizes) {
  let aliceTotalCandies = aliceSizes.reduce((acc, curr) => acc + curr)
  let bobTotalCandies = bobSizes.reduce((acc, curr) => acc + curr)

  let result = []

  let sameTotal = (aliceTotalCandies + bobTotalCandies) / 2

  for (let i = 0; i < aliceSizes.length; i++) {
    let currAliceBox = aliceSizes[i]
    for (let j = 0; j < bobSizes.length; j++) {
      let currBobBox = bobSizes[j]

      if (currAliceBox + currBobBox === sameTotal) {




        return result
      }
    }
  }



}

// ------------------------------------------------------------------------------------------------- //


const countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  let ruleIdx = 0;

  if (ruleKey === 'type') {
    ruleIdx = 0
  } else if (ruleKey === 'color') {
    ruleIdx = 1
  } else {
    ruleIdx = 2
  }

  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    if (item[ruleIdx] === ruleValue) {
      count += 1
    }
  }
  return count
};

// console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]],
//   "color",
//   "silver"));
// ------------------------------------------------------------------------------------------------- //

const largestLocal = function (grid) {
  const matrix = new Array(grid.length - 2).fill(0)
    .map(() => new Array(grid[0].length - 2).fill(0));

  for (let i = 0; i < grid[i].length - 2; i++) {
    for (let j = 0; j < grid.length - 2; j++) {
      matrix[i][j] = Math.max(
        grid[i][j], grid[i][j + 1], grid[i][j + 2],
        grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
        grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]
      );

    }
  }

  return matrix;
};
// ------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------- //
