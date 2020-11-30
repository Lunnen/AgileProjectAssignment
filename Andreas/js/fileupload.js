//replace "input type=file" button with a custom button
//const inputButton = document.getElementById("inputFile");
const customBtn = document.getElementById("custom-button");

//virtually clicks the input button
customBtn.addEventListener("click", function () {
  input.click();
});
/*
inputButton.addEventListener("change", function () {
  document.getElementById("inputFile").onchange = function () {
    document.getElementById("myForm").submit();
  };
});

window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        UploadImage(URL.createObjectURL(this.files[0]));
      }
    });
});

function UploadImage(imgSource) {
  imgContainers.push(new ImgContainer("", imgSource, "", "", ""));
  console.log(imgSource);
  console.log(imgContainers);
  filterSelection("all"); //updates rendering of images
} */
// localStorage.setItem("ImgArrayContainer", JSON.stringify(imgContainers));

var input = document.getElementById("inputFile");
input.addEventListener("change", showDataURI);

function showDataURI() {
  var output = document.getElementById("output");
  var file = input.files[0];

  var reader = new FileReader();
  reader.onload = (e) => {
    // set onload *before* calling readAsDataURL()
    //

    console.log(e.target.result);

    imgContainers.push(
      new ImgContainer(
        prompt("Enter Category", ""),
        e.target.result,
        "",
        "",
        ""
      )
    );
    //filterChoice.push(el.getImgCategory());
    filterSelection("all"); //updates rendering of images

    console.log("before change: ", imgContainers);
    //localStorage.setItem("ImgArrayContainer", JSON.stringify(imgContainers));
  };
  reader.readAsDataURL(file);
}
