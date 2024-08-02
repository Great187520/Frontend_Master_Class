const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboximg = lightbox.querySelector("img");

function addImage() {
  const img = document.createElement("img");
  img.src = `https://placekitten.com/100/100?image=${Math.floor(
    Math.random() * 16
  )}`;
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
  gallery.appendChild(img);
}

function removeImage() {
  if (gallery.lastChild) {
    gallery.removeChild(gallery.lastChild);
  }
}

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
