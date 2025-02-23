const inputArray=[1,2,4,8,3,3,4]
const uniqValue = [...new Set(inputArray)]
console.log(uniqValue)
const secondArray = inputArray.sort()
console.log(secondArray[uniqValue.length-2])
