"use strict";

// Declare Elements
let divMain = document.createElement("div");
let pageLogo = document.createElement("img");
let filterBtnContainer = document.createElement("div");
let galleryMain = document.createElement("div");
let uploadForm = document.createElement("form");
let uploadInput = document.createElement("input");
let uploadButton = document.createElement("button");
let dropToDelete = document.createElement("div");

// Put elements in these boxes on web-page
document.body.appendChild(divMain);
divMain.appendChild(pageLogo);
divMain.appendChild(filterBtnContainer);
divMain.appendChild(uploadForm);
uploadForm.appendChild(uploadInput);
uploadForm.appendChild(uploadButton);
divMain.appendChild(dropToDelete);
divMain.appendChild(galleryMain);

// Text contents
pageLogo.src = "./meny/Fantastic.png";
pageLogo.className = "pageLogo";
galleryMain.className = "row";
divMain.className = "main";
filterBtnContainer.className = "myBtnContainer";
uploadForm.id = "myForm";
uploadInput.type = "file";
uploadInput.id = "inputFile";
uploadInput.hidden = "hidden";
uploadButton.type = "button";
uploadButton.id = "custom-button";
uploadButton.textContent = "Upload an image";
dropToDelete.id = "delete";
dropToDelete.textContent = "Delete";
