

var form = $('form');
var inputBox = $('input');

var deleteItem = function() {
  console.log("testing delete");
  $(this).parent().remove();
};

var addListItem = function(e) {
  e.preventDefault();
  var text = inputBox.val();
  console.log(text);
  var newListItem = $("<li>");
  newListItem.text(text);
  var remove = $("<span>");
  remove.text("Delete")
  remove.on('click', deleteItem);
  newListItem.append(remove);
  $('.list').append(newListItem);
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
