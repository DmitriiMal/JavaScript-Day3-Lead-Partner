// ////////////////////////////////////// //
// ///// ex 1 | Compare two numbers ///// //
// ////////////////////////////////////// //

const martin = [76,64,81,57,94];

const thomas = [85,49,81,72,55];

const klaus = [65,91,84,67,85];

const maria = [93,70,81,64,84];

const david = [81,99,71,100,69];

function getAverage(arr) {
  let sum;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
}

console.log(getAverage(martin));