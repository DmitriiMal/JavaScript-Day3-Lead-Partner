// ///////////////////////////////////// //
// ////// ex 2 | Temperature v2.0 ////// //
// ///////////////////////////////////// //


let degrees = Math.floor(Math.random() * 60) - 30;
console.log(degrees);

if (degrees <= -20) {
console.log(`Winter has come...`);
let h1element = document.querySelector('#heading');
h1element.innerHTML = 'Winter has come...';
let background = document.querySelector('img');
background.setAttribute('src', 'https://images.unsplash.com/photo-1484278786775-527ac0d0b608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2861&q=80')

} else if (degrees <= 0) {
  console.log(`Winter is comming...`);
  let h1element = document.querySelector('#heading');
  h1element.innerHTML = 'Winter is comming ...';
  let background = document.querySelector('img');
  background.setAttribute('src', 'https://images.unsplash.com/photo-1485018713630-7b06241480a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')

} else if (degrees <= 10) {
  console.log(`It's cold, take a jaket`);
  let h1element = document.querySelector('#heading');
  h1element.innerHTML = 'It\'s cold, take a jaket';
  let background = document.querySelector('img');
  background.setAttribute('src', 'https://images.unsplash.com/photo-1488812690953-601000f207e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2980&q=80')

} else if (degrees <= 15) {
  console.log(`The weather is moderate`);
  let h1element = document.querySelector('#heading');
  h1element.innerHTML = 'The weather is moderate';
  let background = document.querySelector('img');
  background.setAttribute('src', 'https://images.unsplash.com/photo-1579619087996-31f649e3ab2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80')

} else if (degrees <= 25) {
  console.log(`It's warm!`);
  let h1element = document.querySelector('#heading');
  h1element.innerHTML = 'It\'s warm!';
  let background = document.querySelector('img');
  background.setAttribute('src', 'https://images.unsplash.com/photo-1541795014659-43129f68cb04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')

} else {
  console.log(`Take a sunglasses ;)`);
  let h1element = document.querySelector('#heading');
  h1element.innerHTML = 'Take a sunglasses ;)';
  let background = document.querySelector('img');
  background.setAttribute('src', 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')
};