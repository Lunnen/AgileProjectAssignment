//"use strict";

let dragItems;
let dropToChangeFilter;

updateItems();

function updateItems() {
  dragItems = document.getElementsByClassName("column");
  dropToChangeFilter = document.getElementsByClassName("btn");

  // TEST PURPOSES
  console.log(dragItems.length);
  console.log(dragItems);

  for (let item of dragItems) {
    let draggedItem = null;

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

      console.log(imgContainers);
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
