"use strict";
/*----------------------------------------------------------------
Image categories/filters
Auto creates another button if imgContainers-array contains a new category name,
if not it's only an "all" button.*/

let filterChoice = ["all"];

createFilterButtons(); //Create the filter buttons

function createFilterButtons() {
  while (filterBtnContainer.firstChild) {
    //start on a clean slate (no buttons)
    filterBtnContainer.firstChild.remove();
  }

  imgContainers.forEach(function (el) {
    if (filterChoice.indexOf(el.getImgCategory()) === -1) {
      //if the category doesnt exist, then push to array (to avoid duplicate entries).
      filterChoice.push(el.getImgCategory());
    }
  });

  //Sorts the categories alphabetically.
  filterChoice = Array.from(filterChoice).sort((a, b) => {
    return a.localeCompare(b, "en", { sensitivity: "base" });
  });

  /*
  Creates all the buttons needed, based on the array filterChoice,
   which gets its values from the main image array - imgContainers. */
  for (let i = 0; i < filterChoice.length; i++) {
    let filterBtn = document.createElement("button");
    filterBtn.className = "btn";

    if (i === 0) {
      filterBtn.className += " active"; //defaults to "all" pictures button
    }

    filterBtn.addEventListener("click", function () {
      filterSelection(filterChoice[i]);
    });

    filterBtn.textContent = filterChoice[i];

    filterBtnContainer.appendChild(filterBtn);
  }

  /*
  Add active class to the current button (highlight it) */
  var btns = filterBtnContainer.getElementsByClassName("btn");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
/*----------------------------------------------------------------
Filters which category to show. */

filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
