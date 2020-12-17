"use strict";

// Declare Elements
let divMain = document.createElement("div");
let pageLogo = document.createElement("img");
let filterBtnContainer = document.createElement("div");
let galleryMain = document.createElement("div");
let uploadForm = document.createElement("form");
let uploadInput = document.createElement("input");
let uploadButton = document.createElement("img");
let dropToDelete = document.createElement("img");

// Put elements in these boxes on web-page
document.body.appendChild(divMain);
divMain.appendChild(pageLogo);
divMain.appendChild(filterBtnContainer);
divMain.appendChild(uploadForm);
uploadForm.appendChild(uploadInput);
uploadForm.appendChild(uploadButton);
divMain.appendChild(dropToDelete);

divMain.appendChild(galleryMain);

// Text + img content
pageLogo.src = "./meny/headloga.png";
pageLogo.className = "pageLogo";
galleryMain.className = "row";
divMain.className = "main";
filterBtnContainer.className = "myBtnContainer";
uploadForm.id = "myForm";
uploadInput.type = "file";
uploadInput.id = "inputFile";
uploadInput.hidden = "hidden";
uploadButton.src = "./meny/upload.png";
uploadButton.id = "custom-button";
uploadButton.textContent = "Upload an image";
dropToDelete.src = "./meny/delete.png";
dropToDelete.className = "dropToDelete";

// The object that creates a Card with text.
function ImgContainer(enterCategory, imgSrc, altName, title, text, editBtn) {
  //checking if a string is null/undefined, blank or contains only white-space.
  if (!enterCategory || /^\s*$/.test(enterCategory)) {
    this.className = "unfiltered";
  } else {
    this.className = enterCategory.toLowerCase();
  }
  this.imgSrc = imgSrc;
  this.altName = altName;
  this.title = title;
  this.text = text;
  this.editButton = editBtn;

  let galleryCard = document.createElement("div");
  let galleryContent = document.createElement("div");
  let galleryIMG = document.createElement("img");
  let galleryTitle = document.createElement("h4");
  let galleryText = document.createElement("p");
  let titleInput = document.createElement("input");
  let textInput = document.createElement("input");
  let editButton = document.createElement("img");

  galleryContent.className = "content";
  galleryCard.className = "column " + this.className;
  galleryCard.draggable = "true";
  galleryIMG.src = imgSrc;
  galleryIMG.alt = altName;
  galleryIMG.style = "width: 100%";
  galleryTitle.textContent = title;
  galleryText.textContent = text;
  editButton.src = "./meny/edit.png";
  editButton.className = "editButton";

  galleryMain.appendChild(galleryCard);
  galleryCard.appendChild(galleryContent);
  galleryContent.appendChild(galleryIMG);
  galleryContent.appendChild(galleryTitle);
  galleryContent.appendChild(galleryText);
  galleryContent.appendChild(editButton);

  //EditButton--------------------------------------------------------
  titleInput.hidden = true;
  textInput.hidden = true;
  let editMode = false;

  galleryContent.appendChild(titleInput);
  galleryContent.appendChild(textInput);

  editButton.addEventListener("click", function () {
    galleryCard.clicked();
  });

  galleryCard.clicked = function () {
    //Enter edit mode
    if (!editMode) {
      editMode = true;

      titleInput.hidden = false;
      textInput.hidden = false;
      galleryTitle.hidden = true;
      galleryText.hidden = true;

      titleInput.placeholder = galleryTitle.textContent;
      textInput.placeholder = galleryText.textContent;
    }
    //Save edits and add them to text/title
    else {
      galleryTitle.innerText = titleInput.value;
      galleryText.innerText = textInput.value;

      titleInput.hidden = true;
      textInput.hidden = true;
      galleryTitle.hidden = false;
      galleryText.hidden = false;

      editMode = false;
      //------------------------------

      compareSyncArray(galleryCard);

      //Push "new" info (the edited one)
      imgContainers.push(
        new ImgContainer(
          enterCategory,
          imgSrc,
          randomNrID(),
          titleInput.value,
          textInput.value
        )
      );
      location.reload();
      saveData();

      //-----------------------s-------
    }
  };

  //------------------------------------------------------------------

  this.getImgCategory = function () {
    return this.className;
  };
}
var imgContainers = []; // Array were IMG "cards" are stored.

/*
 Compare galleryCard to array, keep those that does not have the same ID.
 */
function compareSyncArray(inputToCompare) {
  let uniqueId = inputToCompare.childNodes[0].children[0].alt; //Check the unique altName of item to be removed.

  //Find the objects in imgContainers where the ID DOEST NOT exist.
  let findObjectWithID = imgContainers.filter(
    (check) => check.altName != uniqueId
  ); // ID here (altName), with every object that does not match this with HTML-value above.

  imgContainers = [];

  for (let { className, imgSrc, altName, title, text } of findObjectWithID) {
    imgContainers.push(
      new ImgContainer(className, imgSrc, altName, title, text)
    );
  }
}
