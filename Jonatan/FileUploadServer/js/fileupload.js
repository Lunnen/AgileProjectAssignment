//replace "input type=file" button with a custom button
const inputButton = document.getElementById("uploadFile");
const customBtn = document.getElementById("custom-button");

//virtually clicks the input button
customBtn.addEventListener("click", function () {
  inputButton.click();
});

/*
inputButton.addEventListener("change", function () {
  document.getElementById("uploadFile").onchange = function () {
    document.getElementById("myForm").submit();
  };
});
*/
// File upload using fetch -------------------------------------------------------
// select file input
const input = document.getElementById('uploadFile');


// add event listener
input.addEventListener('change', () => {
    uploadFile(input.files[0]);
});

const uploadFile = (file) => {
  //check file type
  if(!['image/jpeg', 'image/gif', 'image/png'].includes(file.type))
  {
    console.log("Only images are allowed")
    return;
  }

  //add file to a FormData object
  const formData = new FormData();
  formData.append(uploadFile, file);

  //send POST request
  fetch('/upload-image', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
}



function UploadImage(imgSource) {
  imgContainers.push(new ImgContainer("", imgSource, "", "", ""));
  console.log(imgSource);
  console.log(imgContainers);
  filterSelection("all"); //updates rendering of images
}
