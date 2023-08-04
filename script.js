
  //variables
  const inputList = document.querySelector('#inputTodo');
  const addBtn = document.querySelector('#clickButton');
  const list = document.querySelector('.list');
  

//onclick
addBtn.onclick = (e) => {
  
  if (inputList.value) {
    //prevent submit
    e.preventDefault();
    //create div
  const newDiv = document.createElement('div');
  newDiv.classList.add('listContainer');
  list.appendChild(newDiv);

  //create list inside newDiv
  const newList = document.createElement('li');
  newList.innerText = inputList.value;
  newList.classList.add('newList');

  //create checkbtn
  const newcheckBtn = document.createElement('button');
  newcheckBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
  newcheckBtn.classList.add('checkBtn');
  newDiv.appendChild(newcheckBtn);

  // create crossBtn
  const newcrossBtn = document.createElement('button');
  newcrossBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
  newcrossBtn.classList.add('crossBtn');
  newDiv.appendChild(newcrossBtn);

  //excecute by appending the child
  newDiv.appendChild(newList);

  //remove the value of input after added
  inputList.value = '';
  } else {
    alert('please put a List');
  }

};




// Create function
const checkandcrossBtn = () => {
  const checkMarks = document.querySelectorAll('.checkBtn');
  const trashMarks = document.querySelectorAll('.crossBtn');

  // onclicks for check buttons
  checkMarks.forEach(checkMark => {
    checkMark.onclick = () => {
      // Find the parent element (list item) and remove it
      const listItem = checkMark.parentElement;
      listItem.classList.toggle('completed');
      return newcheckBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    };
  });

  // onclicks for cross buttons
  trashMarks.forEach(trashMark => {
    trashMark.onclick = () => {
      // Find the parent element (list item) and remove it
      const listItem = trashMark.parentElement;
      listItem.remove();
    };
  });
};

// Add event listener after the function is defined
list.addEventListener('click', checkandcrossBtn);




  
 
    
  






