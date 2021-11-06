const textBox = document.getElementById('textBox');
const submitButton = document.getElementById('submitButton');
const deleteButton = document.getElementById('clearButton');

submitButton.addEventListener('click', e => { 
  e.preventDefault(); //dont refresh the browser on submit
  const textBoxValue = textBox.value; //variable gets the value from output variable
  const toDoItem = document.createElement('li'); //creates a list element
  toDoItem.innerText = textBoxValue; //writes the value of to do to the list item
  const listElement = document.getElementById('toDoList');
  listElement.appendChild(toDoItem); //grab reference to ul, append child to said reference 
})

deleteButton.addEventListener('click', e => { //make this variable have an event listener
  e.preventDefault(); //dont refresh the browser on submit
  var toDoDeleteAction = document.getElementById('li')
  toDoDeleteAction.remove();
})

const test = document.getElementById('clearButton');
console.log(test.innerText); 

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