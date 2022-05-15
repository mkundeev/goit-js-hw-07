import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');


function creatImg({ preview, description, original }) {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}

function creatGallery(images) {
    const gallery = images.map(creatImg);
    return gallery.join('');
}

function addGallery(gallery) {
   galleryEl.innerHTML = creatGallery(gallery); 
}

addGallery(galleryItems);

new SimpleLightbox('.gallery__item', { captionsData: "alt", captionDelay: "250"});


