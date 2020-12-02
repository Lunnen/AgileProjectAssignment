"use strict";

//Declare Elements
let divMain = document.createElement("div");
let pageTitle = document.createElement("h2");
let filterBtnContainer = document.createElement("div");
let galleryMain = document.createElement("div");
let uploadForm = document.createElement("form");
let uploadInput = document.createElement("input");
let uploadButton = document.createElement("button");

//Put elements in these boxes on web-page
document.body.appendChild(divMain);
divMain.appendChild(pageTitle);
divMain.appendChild(filterBtnContainer);
divMain.appendChild(uploadForm);
uploadForm.appendChild(uploadInput);
uploadForm.appendChild(uploadButton);
divMain.appendChild(galleryMain);

// Text contents
pageTitle.innerHTML = "Team 3 Gallery" + "<hr>";
galleryMain.className = "row";
divMain.className = "main";
filterBtnContainer.className = "myBtnContainer";

// Kolla om nedanstående kan göras kortare <--------------------
uploadForm.id = "myForm";
uploadInput.type = "file";
uploadInput.id = "uploadFile";
uploadInput.hidden = "hidden";
uploadButton.type = "button";
uploadButton.id = "custom-button";
uploadButton.textContent = "Upload an image";
uploadForm.enctype = "enctype='multipart/form-data'";

// The object that creates a Card with text.
function ImgContainer(enterCategory, imgSrc, altName, title, text) {
  if (enterCategory == "" || enterCategory == null) {
    this.className = "unfiltered";
  } else {
    this.className = enterCategory;
  }
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
  galleryCol.className = "column " + this.className;
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
    "dark sky",
    "./images/Ees96A.jpg",
    "nature pic",
    "Forest",
    "this is a nice pic"
  )
);
imgContainers.push(
  new ImgContainer(
    "forest view",
    "./images/close-up-nature02.jpg",
    "pic 2",
    "who cares",
    "another one"
  )
);
imgContainers.push(
  new ImgContainer(
    "Sunny view",
    "./images/QGucjH.jpg",
    "beautiful",
    "New title",
    "Another one bites the dust..."
  )
);
imgContainers.push(
  new ImgContainer(
    "Computer on desk",
    "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "Inside",
    "Inside",
    "Calm inside view"
  )
);
imgContainers.push(
  new ImgContainer(
    "",
    "https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    "",
    "",
    ""
  )
);
