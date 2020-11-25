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

let filterChoice = ["all", "blu sky", "dark", "sunny"];

for (let i = 0; i < filterChoice.length; i++) {
  let filterBtn = document.createElement("button");
  filterBtn.className = "btn";

  if (i == 0) {
    filterBtn.className += " active";
  }
  // denna gör inte riktigt vad jag vill än.. glömmer onclick
  filterBtn.onclick = "filterSelection(" + filterChoice[i] + ")";
  filterBtn.textContent = filterChoice[i];

  filterBtnContainer.appendChild(filterBtn);
}

let picContainers = [];

/* 
This is where you push the pictures into the array (picContainers), 
which then renders them on page 
*/
picContainers.push(
  new PictureContainer(
    "blue sky",
    "./images/Ees96A.jpg",
    "nature pic",
    "Forest",
    "this is a nice pic"
  )
);

picContainers.push(
  new PictureContainer(
    "blue sky",
    "./images/close-up-nature02.jpg",
    "pic 2",
    "who cares",
    "another one"
  )
);

function PictureContainer(enterClass, imgSrc, altName, title, text) {
  this.className = enterClass;
  this.imgSrc = imgSrc;
  this.altName = altName;
  this.title = title;
  this.text = text;

  this.createContainer = function () {};
  let galleryCol = document.createElement("div");
  let galleryContent = document.createElement("div");
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
