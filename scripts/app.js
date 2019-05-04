// getting the references here
const inputVal = document.querySelector('#task');
const formSubmit = document.querySelector('#taskForm');
const clearTask = document.querySelector('#clearList');
const ulParent = document.querySelector('.collection');

//event listener on form submit
formSubmit.addEventListener('submit',(e) => {

    // to prevent the default behaviour
    e.preventDefault();
    if(inputVal.value === ''){
        alert('Please Enter Data')
    }

    let data = inputVal.value;

    // creating li elements
    const li = document.createElement('li');
    
})