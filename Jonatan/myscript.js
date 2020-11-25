//replace input button with a custom button
const inputButton = document.getElementById("inputFile");
const customBtn = document.getElementById("custom-button");

customBtn.addEventListener("click", function() {
    inputButton.click();
});

inputButton.addEventListener("change", function() {
    if (inputButton.value) {
        console.log("file chosen");
        console.log(inputButton.value);
        console.log(inputButton.files[0]);
    }
    else {
        console.log("no file chosen");
    }
document.getElementById("inputFile").onchange = function() {
        document.getElementById("myForm").submit();
    };
});

/*
document.getElementById("file").onchange = function() {
    document.getElementById("form").submit();
};
*/

//ServerSideScriptShit
const myForm = document.getElementById("myForm");
const inpFile = document.getElementById("inputFile");

myForm.addEventListener("submit", e => {
    e.preventDefault();

    const endPoint = "fileUpload.php";
    const formData = new FormData();

    formData.append("inpFile", inpFile.files[0]);
    fetch(endPoint, {
        method: "POST",
        body: formData
    }).catch(console.error);
});
//FOR MULTIPLE ""put the images inside an array and then use .map to fetch each one of them

/*
function UploadImage(img) {

    picContainers.push(
        new PictureContainer(
          "FILTER",
          "HEREGOESSOURCE",
          "ALT",
          "TITLE",
          "TEXT"
        )
      );
}
*/