function make_avg(arr, size) {
  if (size === 0) {
    return 0;
  }
  const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = totalSum / size;
  return average;
}

// Test the function
const array_of_integers = [50, 100, 100, 50, 50];
const array_size = array_of_integers.length;
const result = make_avg(array_of_integers, array_size);
console.log("Average:", result);