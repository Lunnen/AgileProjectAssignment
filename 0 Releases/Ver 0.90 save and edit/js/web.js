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


function ImgContainer(enterCategory, imgSrc, altName, title, text,editBtn) {
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
 
  //let altName = document.createElement("input");
  //let title = document.createElement("input");
  //let text = document.createElement("input");
  let galleryCard = document.createElement("div");
  let galleryContent = document.createElement("div");
  let galleryIMG = document.createElement("img");
  let galleryTitle = document.createElement("h4");
  let galleryText = document.createElement("p");
  //-------
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
            console.log("Clicked");
            galleryCard.clicked();      
        });

  galleryCard.clicked = function() { 
     //Enter edit mode
     if(!editMode) {
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
        galleryTitle.textContent = titleInput.value;
        galleryText.textContent = textInput.value;
    
        titleInput.hidden = true;
        textInput.hidden = true;
        galleryTitle.hidden = false;
        galleryText.hidden = false;
    
        editMode = false;
    }
  };

  

  //------------------------------------------------------------------

  this.getImgCategory = function () {
    return this.className;
  
  };

}

var imgContainers = []; // Array were IMG "cards" are stored.

//SOME HARDCODED STUFF - REMOVAL BEFORE RELEASE!!
/*---------------------------------------------------
This is where you push the pictures into the array (imgContainers), 
which then renders them on page 
*/

/*
imgContainers.push(
  new ImgContainer(
    "Landscape",
    "./images/Ees96A.jpg",
    "nature pic",
    "Forest",
    "this is a nice pic"
  )
);
imgContainers.push(
  new ImgContainer(
    "Landscape",
    "./images/close-up-nature02.jpg",
    "forestal view",
    "Forestal view",
    "another one"
  )
);
imgContainers.push(
  new ImgContainer(
    "Landscape",
    "./images/QGucjH.jpg",
    "beautiful",
    "A field and clouds",
    "Another one bites the dust..."
  )
);
imgContainers.push(
  new ImgContainer(
    "Computer",
    "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "Inside",
    "Inside",
    "Calm inside view URL FROM NET"
  )
);
imgContainers.push(
  new ImgContainer(
    "Monument",
    "https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    "Petra city in the dark",
    "Petra",
    "URL FROM NET"
  )
); */



//Object edit
/*----------------------------
//EditButton--------------------------------------------------------
  titleInput.hidden = true;
  textInput.hidden = true;
  let editMode = false;

  galleryContent.appendChild(titleInput);
  galleryContent.appendChild(textInput);

  galleryCard.clicked = function() { 
     //Enter edit mode
     if(!editMode) {
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
        galleryTitle.textContent = titleInput;
        galleryText.textContent = textInput;
    
        titleInput.hidden = true;
        textInput.hidden = true;
        galleryTitle.hidden = false;
        galleryText.hidden = false;
    
        editMode = false;
    }
  };
  */