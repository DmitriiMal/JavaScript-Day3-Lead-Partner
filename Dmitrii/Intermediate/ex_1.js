// ////////////////////////////////////// //
// ///// ex 1 | Compare two numbers ///// //
// ////////////////////////////////////// //

const martin = [76, 64, 81, 57, 94];
const thomas = [85,49,81,72,55];
const klaus = [65,91,84,67,85];
const maria = [93,70,81,64,84];
const david = [81,99,71,100,69];

// const classAv = {
//   martin: 0,
//   thomas: 0,
//   klaus: 0,
//   maria: 0,
//   david: 0,
// }

function getAverageGrade(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    // console.log(sum);
  }
  let average = sum / arr.length;
  let averageGrade;

  if (average < 60) {
    averageGrade = 'F';
  } else if (average < 70){
    averageGrade = 'D';
  } else if (average < 80){
    averageGrade = 'C';
  } else if (average < 90){
    averageGrade = 'B';
  } else if (average < 100){
    averageGrade = 'A';
  }
  const object =  {
    average: average,
    grade: averageGrade,
  };
  return object;
// averageGrade;
}

const martinObj = getAverageGrade(martin);
const thomasObj = getAverageGrade(thomas);
const klausObj = getAverageGrade(klaus);
const mariaObj = getAverageGrade(maria);
const davidObj = getAverageGrade(david);




function getClassAvGrade() {
 const average = (martinObj.average + thomasObj.average +  klausObj.average + mariaObj.average + davidObj.average) / 5;
 console.log(average);
 let classAvGrade = '';
 if (average < 60) {
  classAvGrade = 'F';
} else if (average < 70){
  classAvGrade = 'D';
} else if (average < 80){
  classAvGrade = 'C';
} else if (average < 90){
  classAvGrade = 'B';
} else {
  classAvGrade = 'A';
}
return classAvGrade;
}

console.log(getClassAvGrade());;











// function calAvg(cr1, cr2, cr3, cr4, cr5, cr6) {
//   let sum = cr1 + cr2 + cr3 + cr4 + cr5 + cr6;
//   let avg = sum / 6;
//   return avg;
// }


// let student1 = calAvg(80, 90, 100, 90, 70, 100);
// let student2 = calAvg(80, 90, 100, 90, 70, 100);