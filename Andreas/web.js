"use strict";

//Declare Elements
let divMain = document.createElement("div");
let pageTitle = document.createElement("h2");
let filterBtnContainer = document.createElement("div");
let galleryMain = document.createElement("div");

//Put elements in these boxes on web-page
document.body.appendChild(divMain);
divMain.appendChild(pageTitle);
divMain.appendChild(filterBtnContainer);
divMain.appendChild(galleryMain);

// Text contents
pageTitle.innerHTML = "Team 3 Gallery" + "<hr>";
galleryMain.className = "row";
divMain.className = "main";
filterBtnContainer.className = "myBtnContainer";

// The object that creates a Card with text.
function ImgContainer(enterCategory, imgSrc, altName, title, text) {
  this.className = enterCategory;
  this.imgSrc = imgSrc;
  this.altName = altName;
  this.title = title;
  this.text = text;

  let galleryCol = document.createElement("div");
  let galleryContent = document.createElement("div");
  let galleryIMG = document.createElement("img");
  let galleryTitle = document.createElement("h4");
  let galleryText = document.createElement("p");

  galleryContent.className = "content";
  galleryCol.className = "column " + enterCategory;
  galleryIMG.src = imgSrc;
  galleryIMG.alt = altName;
  galleryIMG.style = "width: 100%";
  galleryTitle.textContent = title;
  galleryText.textContent = text;

  galleryMain.appendChild(galleryCol);
  galleryCol.appendChild(galleryContent);
  galleryContent.appendChild(galleryIMG);
  galleryContent.appendChild(galleryTitle);
  galleryContent.appendChild(galleryText);

  this.getImgCategory = function () {
    return this.className;
  };
}

let imgContainers = []; // Array were IMG "cards" are stored.

/* 
This is where you push the pictures into the array (imgContainers), 
which then renders them on page 
*/
imgContainers.push(
  new ImgContainer(
    "dark",
    "./images/Ees96A.jpg",
    "nature pic",
    "Forest",
    "this is a nice pic"
  )
);
imgContainers.push(
  new ImgContainer(
    "forest",
    "./images/close-up-nature02.jpg",
    "pic 2",
    "who cares",
    "another one"
  )
);
imgContainers.push(
  new ImgContainer(
    "dark",
    "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "Inside",
    "Inside",
    "Calm inside view"
  )
);
imgContainers.push(
  new ImgContainer(
    "test",
    "./images/QGucjH.jpg",
    "beautiful",
    "New title",
    "Another one bites the dust..."
  )
);
/*
funkar bra även att lägga till från webben direkt, 
vilket är bra att veta när vi ska ha riktiga upload-funktioner.
*/

/* Image categories/filters
Auto creates another button if imgContainers contains a new category name,
if not it's only an "all" button.
*/
let filterChoice = ["all"];

imgContainers.forEach(function (el) {
  filterChoice.push(el.getImgCategory());
});

for (let i = 0; i < filterChoice.length; i++) {
  let filterBtn = document.createElement("button");
  filterBtn.className = "btn";

  if (i === 0) {
    filterBtn.className += " active";
  }
  filterBtn.setAttribute(
    "onclick",
    "filterSelection('" + filterChoice[i] + "')"
  );
  filterBtn.textContent = filterChoice[i];

  filterBtnContainer.appendChild(filterBtn);
}
