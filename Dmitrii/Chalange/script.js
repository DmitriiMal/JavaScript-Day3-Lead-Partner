
// ///////////////////// //
// ///// Challenge ///// //
// ///////////////////// //


// let studentsName = 'Jane';
let studentsName = prompt("type your name");
let studentsGrade = 0;

const students = ['John', 'Jane', 'Bob', 'Anna'];

const mathGrades = [50, 65, 75, 100];

students.forEach((value, index) => {
  if (studentsName == value) {
    console.log(value, index);
    studentsGrade = mathGrades[index]
    console.log(studentsGrade);
  }
});

let h1 = document.querySelector('h1');
h1.innerHTML = studentsName + ' has reached ' + studentsGrade + ' points in Math this season.'


if (studentsGrade < 60) {
  h1.setAttribute('style', 'color: red');
  console.log('Color');
} else if (studentsGrade < 70) {
  h1.setAttribute('style', 'color: yellow');
  console.log('Color');
} else if (studentsGrade < 100) {
  h1.setAttribute('style', 'color: green');
  console.log('Color');
} else {
  h1.setAttribute('style', 'color: blue');
  console.log('Color');
}