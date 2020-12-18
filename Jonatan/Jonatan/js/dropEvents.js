//--------------------------------------------------------
"use strict";

let dragItems;
let dropToChangeFilter;
let draging = false;

updateItems();

function updateItems() {
  dragItems = document.getElementsByClassName("column");
  dropToChangeFilter = document.getElementsByClassName("btn");

  for (let item of dragItems) {
    var draggedItem = null;

    item.addEventListener("dragstart", function () {
      draggedItem = this;
      dropToDelete.classList.add("hint");
      dropToDelete.src = "./meny/deletehint.png";
      draging = true;
    });

    dropToDelete.addEventListener("dragenter", function () {
      dropToDelete.classList.add("active");
      dropToDelete.src = "./meny/deletehover.png";
    });

    dropToDelete.addEventListener("dragleave", function () {
      dropToDelete.classList.remove("active");
      dropToDelete.src = "./meny/delete.png";
    });

    dropToDelete.addEventListener("dragover", function (evt) {
      evt.preventDefault();
    });

    dropToDelete.addEventListener("drop", function (evt) {
        evt.preventDefault();
      if (draging) {
        draggedItem.remove(); //remove dragged item from being visible

        /* This is where the Drop removal syncs to the array of imgContainers, 
        by linking the img.altname to array contents.
        Without this, the action of removal will not be there upon refresh of browser.
        */
        console.log("test");
        compareSyncArray(draggedItem);
  
        location.reload(); //Reload Browser DOM.
        saveData();
        updateItems(); //updates items in the "dropEvents"
        filterSelection("all");
        createFilterButtons(); //Create a new filter button, if needed
        draging = false;
      } 
    });

    for (let filter of dropToChangeFilter) {
      filter.addEventListener("dragover", function (evt) {
        evt.preventDefault();
      });

      filter.addEventListener("drop", function (evt) {
        if (draging) {
          evt.preventDefault();
          draggedItem.className = "column " + filter.textContent + " show";
          draging = false;
        }
      });
    }

    item.addEventListener("dragend", function () {
      dropToDelete.classList.remove("hint");
      dropToDelete.classList.remove("active");
    });
  }
}
//--------------------------------------------------------
