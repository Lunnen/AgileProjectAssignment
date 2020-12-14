//--------------------------------------------------------
"use strict";

let dragItems;
let dropToChangeFilter;

updateItems();

function updateItems() {
  dragItems = document.getElementsByClassName("column");
  dropToChangeFilter = document.getElementsByClassName("btn");


  for (let item of dragItems) {
    var draggedItem = null;

    item.addEventListener("dragstart", function () {
      draggedItem = this;
      dropToDelete.classList.add("hint");
    });

    dropToDelete.addEventListener("dragenter", function () {
      dropToDelete.classList.add("active");
    });

    dropToDelete.addEventListener("dragleave", function () {
      dropToDelete.classList.remove("active");
    });

    dropToDelete.addEventListener("dragover", function (evt) {
      evt.preventDefault();
    });

    dropToDelete.addEventListener("drop", function (evt) {
      evt.preventDefault();
      draggedItem.remove();
	  
	    // TEST PURPOSES
  for(let i = 0; i < dragItems.length; i++){
  
     console.log(dragItems[i].className.split(' ')[1]); //CategoryName
  //console.log(dragItems[0].childNodes[0].children[0].src);
  console.log(dragItems[i].childNodes[0].children[0].alt);
 console.log(dragItems[i].childNodes[0].children[1].textContent);
console.log(dragItems[i].childNodes[0].children[2].textContent);

}
//--------------------------

    });

    for (let filter of dropToChangeFilter) {
      filter.addEventListener("dragover", function (evt) {
        evt.preventDefault();
      });

      filter.addEventListener("drop", function (evt) {
        evt.preventDefault();
        draggedItem.className = "column " + filter.textContent + " show";
      });
    }

    item.addEventListener("dragend", function () {
      dropToDelete.classList.remove("hint");
      dropToDelete.classList.remove("active");
    });
  }
}
//--------------------------------------------------------
