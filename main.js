const fileInput = document.querySelector('#input');
        var pimg = document.querySelector('.preview-img');
     fileInput.onchange = () => {
        let img = document.createElement('img');
    console.log(fileInput.files[0])
  const file = fileInput.files[0];
  img.src=URL.createObjectURL(file)
  pimg.appendChild(img)
}