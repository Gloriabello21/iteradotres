const mainArr = [1, 5, 6, 8]

const callback = (element, i, arr) => {
    //console.log (element, i, arr)
    return element * 2
}

//
const arr = mainArr.map(callback)
console.log(arr)


const mayorA5= (element) => {
    return element > 5 
}

const filtered = mainArr.filter(mayorA5)
console.log(filtered)




