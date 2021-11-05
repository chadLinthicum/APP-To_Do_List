const output = document.getElementById('toDoText'); //Textbox input item
const submitButton = document.getElementById('submit-button'); //Button input item

submitButton.addEventListener('click', e => {
  e.preventDefault(); //dont refresh the browser
  const todo = output.value; //only works with input elements
  var li = document.createElement('li');
  li.innerText = todo;
  document.body.appendChild(li);
})










// const first = document.getElementById('firstToDo')
// console.log(first);

// first.style.color='crimson';

// const lis = document.querySelectorAll('li');
// lis.forEach(li => {
//   document.write(li.innerText);
// })

// const lis2 = document.querySelectorAll('li');
// lis2.forEach(li => {
//   console.log(li.innerText); //textContent for everything including hidden
// })