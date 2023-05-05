let logo = document.getElementById("logo");
let umbrella = document.getElementById("umbrella_image");
let input_file = document.getElementById("input-file");
let logo_upload = document.getElementById("logo_upload_btn");
let file_btn = document.getElementById("file_btn");

input_file.onchange = function () {
  if (input_file.value != "") {
    umbrella.classList.add("hide");
    let loader = document.getElementById("loader_img");
    loader.classList.add('rotating');
    file_btn.textContent = input_file.files[0].name;

    setTimeout(() => {
      loader.classList.add('hide');
      umbrella.classList.add("display");
      logo.classList.add("display");
      logo.src = URL.createObjectURL(input_file.files[0]);
    }, 7000);
  }

}


const switchColor = (color) => {
  let image_url = "";
  if (color === "rgb(187, 14, 109)") {
    image_url = "./images/Pink umbrella.png";
    document.body.style.backgroundColor = "#e6b3e2";
  } else if (color === "rgb(19, 19, 202)") {
    image_url = "./images/Blue umbrella.png";
    document.body.style.backgroundColor = "#b3d3e6";
  } else {
    image_url = "./images/Yello umbrella.png";
    document.body.style.backgroundColor = "#e6e2b3";
  }
  umbrella.src = image_url;
  logo_upload.style.backgroundColor = color;
}



