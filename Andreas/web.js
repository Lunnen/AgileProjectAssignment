"use strict";

//Declare Elements
let divMain = document.createElement("div");
let h2 = document.createElement("h2");
let filterBtnContainer = document.createElement("div");
let galleryMain = document.createElement("div");

//Put elements in these boxes on web-page
document.body.appendChild(divMain);
divMain.appendChild(h2);
divMain.appendChild(filterBtnContainer);
divMain.appendChild(galleryMain);

// Text contents
h2.innerHTML = "Team 3 Gallery" + "<hr>";
galleryMain.className = "row";
divMain.className = "main";
filterBtnContainer.className = "myBtnContainer";

// Image categories, must be typed the same in Picture array to work (this needs to be automatic)
let filterChoice = ["all", "forest", "dark", "sunny"];

for (let i = 0; i < filterChoice.length; i++) {
  let filterBtn = document.createElement("button");
  filterBtn.className = "btn";

  if (i == 0) {
    filterBtn.className += " active";
  }
  filterBtn.setAttribute(
    "onclick",
    "filterSelection('" + filterChoice[i] + "')"
  );
  filterBtn.textContent = filterChoice[i];

  filterBtnContainer.appendChild(filterBtn);
}

// The object that creates a Card with text.
function PictureContainer(enterClass, imgSrc, altName, title, text) {
  this.className = enterClass;
  this.imgSrc = imgSrc;
  this.altName = altName;
  this.title = title;
  this.text = text;

  this.createContainer = function () {};
  let galleryCol = document.createElement("div");
  let galleryContent = document.createElement("div");
  galleryContent.className = "content";
  let galleryIMG = document.createElement("img");
  let galleryTitle = document.createElement("h4");
  let galleryText = document.createElement("p");

  galleryCol.className = "column " + enterClass;
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
}

let picContainers = []; // Array were IMG "cards" are stored.

/* 
This is where you push the pictures into the array (picContainers), 
which then renders them on page 
*/
picContainers.push(
  new PictureContainer(
    "dark",
    "./images/Ees96A.jpg",
    "nature pic",
    "Forest",
    "this is a nice pic"
  )
);
picContainers.push(
  new PictureContainer(
    "forest",
    "./images/close-up-nature02.jpg",
    "pic 2",
    "who cares",
    "another one"
  )
);
picContainers.push(
  new PictureContainer(
    "sunny",
    "./images/QGucjH.jpg",
    "beautiful",
    "New title",
    "Another one bites the dust..."
  )
);
picContainers.push(
  new PictureContainer(
    "dark",
    "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "Inside",
    "Inside",
    "Calm inside view"
  )
);
//funkar bra även att lägga till från webben direkt, vilket är bra att veta när vi ska ha riktiga upload-funktioner.
