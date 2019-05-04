// getting the references here
const inputVal = document.querySelector('#task');
const formSubmit = document.querySelector('#taskForm');
const clearTask = document.querySelector('#clearList');
const ulParent = document.querySelector('.collection');

//event listener on form submit
formSubmit.addEventListener('submit',(e) => {

    // to prevent the default behaviour
    e.preventDefault();

    // validating here
    if(inputVal.value === ''){
        alert('Please Enter Data')
    }

    // getting the input value here
    let data = inputVal.value;

    // creating li elements
    const li = document.createElement('li');

    // adding class to li
    li.className = 'collection-item';

    //adding text to the li
    li.textContent = data;

    // creating the remove button here
    const a = document.createElement('a');

    // adding class to the element
    a.className = 'deleteList secondary-content';
    
    // adding HTML inside the a element
    a.innerHTML = `<i class = "fa fa-remove"></i>`

    // appending the a element to the li
    li.appendChild(a);

    // now appending the li to the parent ul
     ulParent.appendChild(li);

    //  clearing the input field here
    inputVal.value = '';

})