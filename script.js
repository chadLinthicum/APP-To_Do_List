const textBox = document.getElementById('textBox');
const submitButton = document.getElementById('submitButton');
const clearButton = document.getElementById('clearButton');
var i = 1;

////
function submit() {
  const ulDiv = document.createElement('div');
  const toDoItemButton = document.createElement('button');
  const toDoItemText = document.createElement('li');
  const toDoList = document.getElementById('toDoList');
  const textBoxValue = textBox.value;
  textBox.value = ""; //clears the textBox
  if (toDoItemButton.textContent == "") {
    toDoItemButton.textContent = "X";
  }
  toDoList.appendChild(ulDiv);
  ulDiv.className = "toDoItems";
  ulDiv.id = "toDoItem_" + i;
  i++;
  toDoItemText.innerText=textBoxValue;
  ulDiv.appendChild(toDoItemText);
  toDoItemText.appendChild(toDoItemButton);
  toDoItemButton.className = "xButton";
  toDoItemText.addEventListener('click', strikethroughTheText)
  toDoItemButton.addEventListener('click', () => deleteToDo(toDoItemButton));
  console.log(toDoItemButton.parentElement);
}

////
submitButton.addEventListener("click", event => { 
  event.preventDefault();
  if (textBox.value == "") {
    alert("Oy! Ya gotta do somethin!");
  } else {
    submit();
  }
})

////
function strikethroughTheText(event) {
  // console.log(event.target.className);
  if (event.target.className == "") {
    event.target.classList.add("strikeThrough");
  } else {
  // console.log("Test");
  event.target.removeAttribute("class");
  }
}

////
function deleteToDo(element) {
  element.parentElement.remove();
}