const numbers = [1, 2, 3, 4, 4, 5, 7, 1, 9, 2, 5];

const nums = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});
console.log(nums);