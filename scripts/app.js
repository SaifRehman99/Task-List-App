// getting the references here
const inputVal = document.querySelector('#task');
const formSubmit = document.querySelector('#taskForm');
const clearTask = document.querySelector('.clearList');
const ulParent = document.querySelector('.collection');

// getting item from localStorage
const getItem = () => {

    let data = localStorage.getItem('list');

    return data !== null ? JSON.parse(data) : [];

}


// returning the list data from the localStorage
let listData = getItem();


// saving data to the localStorage
let savingData = (item) => {

    localStorage.setItem('list', JSON.stringify(item));
}




//event listener on form submit
formSubmit.addEventListener('submit', (e) => {

    // to prevent the default behaviour
    e.preventDefault();

    // validating here
    if (inputVal.value === '') {
        alert('Please Enter Data')
    }
    else{

    

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

    // adding data to the array
    listData.push(data);



    // saving data here
    savingData(listData);

    //  clearing the input field here
    inputVal.value = '';
    }

})


// displaying the saved data in local storage on the UI
const displayList = (list) => {
    list.forEach((item) => {
        // creating li elements
        const li = document.createElement('li');

        // adding class to li
        li.className = 'collection-item';

        //adding text to the li
        li.textContent = item;

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

    })
}
displayList(listData)



// to delete the item in the ul
ulParent.addEventListener('click', (e) => {
    // getting the html of remove link
    if (e.target.parentElement.classList.contains('deleteList')) {
        e.target.parentElement.parentElement.remove();
    }
})

// to delete the whole list
clearTask.addEventListener('click', (e) => {
    ulParent.innerHTML = '';

})