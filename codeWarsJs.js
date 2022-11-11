function josephus(items, k) {
  let arrFilter = []
  let killCount = k
  let newArr = []

  while (items.length > 0) {

    for (let i = 0; i < items.length; i++) {
      killCount--
      if (killCount === 0) {
        arrFilter.push(i)
        killCount = k
      }
    }
    newArr.push(items.filter((item, index) => { 
      return arrFilter.includes(index)}))

    items = items.filter((item, index) => { 
      return !arrFilter.includes(index)})
  }
  return newArr.flat()
}


console.log(josephus([true, true, false, true, true, true, false], 3))