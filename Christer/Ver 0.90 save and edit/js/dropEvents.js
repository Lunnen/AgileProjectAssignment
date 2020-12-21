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
      dropToDelete.src ="./meny/deletehint.png";
    });

    dropToDelete.addEventListener("dragenter", function () {
      dropToDelete.classList.add("active");
      dropToDelete.src ="./meny/deletehover.png";
    });

    dropToDelete.addEventListener("dragleave", function () {
      dropToDelete.classList.remove("active");
      dropToDelete.src ="./meny/delete.png";
    });

    dropToDelete.addEventListener("dragover", function (evt) {
      evt.preventDefault();
    });

    dropToDelete.addEventListener("drop", function (evt) {
      evt.preventDefault();
      //evt.stopImmediatePropagation();

      draggedItem.remove(); //remove dragged item from being visible

      let uniqueIdToRemove = draggedItem.childNodes[0].children[0].alt; //Check the unique altName of item to be removed.

      //Find the objects in imgContainers where the ID DOEST NOT exist.
      let findObjectWithID = imgContainers.filter(
        (check) => check.altName != uniqueIdToRemove
      ); // ID here (altName), with every object that does not match this with HTML-value above.

      imgContainers = [];

      for (let {
        className,
        imgSrc,
        altName,
        title,
        text,
      } of findObjectWithID) {
        imgContainers.push(
          new ImgContainer(className, imgSrc, altName, title, text)
        );
      }
      location.reload();
      saveData();
      updateItems(); //updates items in the "dropEvents"
      /*
      console.log(imgContainers.includes(findObjectWithID));
      var dupeIndex = imgContainers.indexOf(findObjectWithID);

      console.log(dupeIndex); //if not found, returns -1
      //imgContainers.splice(dupeIndex, 1);

      imgContainers = imgContainers.filter(function (item) {
        return item !== dupeIndex;
      });
      console.log(imgContainers);
      //saveData();
*/
      /*
      if (imgContainers.filter( function(item) {
        return item;
        console.log("It's there!!!!");
      }
      for (let i = imgContainers.length; i >= 0; i--) {
        if (imgContainers[i] == uniqueIdToRemove) {
          imgContainers.splice(i, 1);
          saveData();
          console.log("removed!");
        }
      } */

      console.log("Remove this id/alt name: " + uniqueIdToRemove); //Saves everything in imgContainers to LocalStorage inside client browser.

      filterSelection("all");
      createFilterButtons(); //Create a new filter button, if needed

      /*
      //Push current data from HTML into array(imgContainers)
      for (var i = 0; i < dragItems.length; i++) {
        //This reads HTML-collection data that currently exists on page.

        let className = dragItems[i].className.split(" ")[1];
        let src = dragItems[i].childNodes[0].children[0].src;
        let alt = dragItems[i].childNodes[0].children[0].alt;
        let title = dragItems[i].childNodes[0].children[1].innerText;
        let text = dragItems[i].childNodes[0].children[2].innerText;

        imgContainers.push(new ImgContainer(className, src, alt, title, text));
      }
      */

      //filterSelection("all");
      //createFilterButtons(); //Create a new filter button, if needed
      //updateItems(); //updates items in the "dropEvents"
      /*
      // TEST PURPOSES
      for (let i = 0; i < dragItems.length; i++) {
        //This reads HTML-collection data that currently exists on page.
        console.log(dragItems[i].className.split(" ")[1]); //CategoryName - use the second option
        console.log(dragItems[i].childNodes[0].children[0].src); //Img src location
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
