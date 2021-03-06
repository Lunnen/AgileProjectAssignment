"use strict";
//----------------------------------------------------------------

loadData();

function loadData() {
  // Read & push Category value, image source... from localStorage into the "card" container (imgContainers)

  if (localStorage.getItem("cardObjects") != null) {
    let localData = JSON.parse(localStorage.getItem("cardObjects"));

    for (let { imgSrc, altName, title, text } of localData) {
      imgContainers.push(new ImgContainer(imgSrc, altName, title, text));
    }
  }
}
function saveData() {
  //Saves imgContainer as a string-object in localStorage.
  localStorage.setItem("cardObjects", JSON.stringify(imgContainers));
}

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

function filterSelection(input) {
  let column;
  column = document.getElementsByClassName("column");
  if (input == "all") input = "";
  for (let i = 0; i < column.length; i++) {
    RemoveClass(column[i], "show");
    if (column[i].className.indexOf(input) > -1) AddClass(column[i], "show");
  } //If column[i]'s categoryName is indexed, send column-values to addClass.
}

function AddClass(element, name) {
  let arr1;
  let arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) element.className += " " + arr2[i];
  }
}

function RemoveClass(element, name) {
  var arr1;
  var arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); //Remove one part of indexed array.
    }
  }
  element.className = arr1.join(" ");
}

/* 
Randomized number for img alt tag - used for sync between 
dropEvent & edit buttons to the array of imgContainers. 
*/
function randomNrID() {
  return Date.now() * Math.random();
}
//----------------------------------------------------------------
