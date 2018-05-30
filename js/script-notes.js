

// assigning this form to the 'form' element from DOM
var form = $('form');
// assigning this form to the 'input' element from DOM
var inputBox = $('input');

// function called delete
var deleteItem = function() {
  // teting delete
  console.log("testing delete");
  // 'this' keyword in this function refers to the element that was clicked on
  // finds the parent of the element that was clicked on (this)
  // removes this's parent (including this) from the page
  $(this).parent().remove();
};

// creates a function addListItem
var addListItem = function(e) {
  // prevents the default event from happening
  e.preventDefault();
  // grabs what the user typed from the inputBox
  var text = inputBox.val();
  console.log(text);
  // creates a new list item element and stores it in variable newListItem
  var newListItem = $("<li>");
  // sets newListItem's text to variable text
  newListItem.text(text);
  // creates a new span element and sets it to a variable remove
  var remove = $("<span>");
  // sets remove's text to string delete
  remove.text("Delete")
  // adds an event listener on click that calls function delete item
  remove.on('click', deleteItem);
  // appends remove to newListItem
  newListItem.append(remove);
  // appends newListItem to the to do list
  $('.list').append(newListItem);
  // clears the text from the input box
  inputBox.val("");
};

// adds an onSubmit event listener to the form that calls function addListItem
form.submit(addListItem);





// pseudo code:
// user clicks in box, user types in box, user clicks on submit button
//Done

// compuer listens for submit button to be clicked on
//Done

// computer take text from input box and moves it below
  // grab text from input box, save as variable
  // Done

  // make sure element is a list item
  // done

  // add event Listner on our new item
  // Done

  // put the element on the page
  // Done

// write delete function
  // grab item that was clicked on
  // remove this item from page


// puts items into a list


// user clicks on remove button


// computer removes texts from input input inputBox
