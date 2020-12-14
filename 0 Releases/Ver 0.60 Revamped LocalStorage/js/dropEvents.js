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

      //imgContainers.length = 0; //Clear the array of img containers.

      console.log(dragItems.length);
      //Push current data from HTML into array(imgContainers)
      /*for (let i = 0; i < dragItems.length; i++) {
        //This reads HTML-collection data that currently exists on page.
        imgContainers.push(
          new ImgContainer(
            dragItems[i].className.split(" ")[1],
            dragItems[i].childNodes[0].children[0].src,
            dragItems[i].childNodes[0].children[0].alt,
            dragItems[i].childNodes[0].children[1].textContent,
            dragItems[i].childNodes[0].children[2].textContent
          )
        );
      } */

      console.log("efter html push: " + imgContainers);
      //filterSelection("all");
      //createFilterButtons(); //Create a new filter button, if needed
      //updateItems(); //updates items in the "dropEvents"
      /*
      // TEST PURPOSES
      for (let i = 0; i < dragItems.length; i++) {
        //This reads HTML-collection data that currently exists on page.
        console.log(dragItems[i].className.split(" ")[1]); //CategoryName - use the second option
        console.log(dragItems[0].childNodes[0].children[0].src); //Img src location
        console.log(dragItems[i].childNodes[0].children[0].alt); //Img alt name location
        console.log(dragItems[i].childNodes[0].children[1].textContent); //Title location
        console.log(dragItems[i].childNodes[0].children[2].textContent); //Text location
      } */
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
