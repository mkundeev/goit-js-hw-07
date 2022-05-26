import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

let modal = basicLightbox.create(``);

function creatImg({ preview, description, original }) {
    return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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

galleryEl.addEventListener('click', openModal);

function creatModal() {
    return modal =basicLightbox.create(`
    <img src="${event.target.src = event.target.dataset.source}"/>
    `);
}  

function openModal(event) {
    event.preventDefault();
    window.addEventListener('keydown', modalCloseOnEsc);
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    creatModal().show();   
}
  
function modalCloseOnEsc(event) {
    console.log(event.code);
    
    if (event.code === "Escape") modal.close(()=>window.removeEventListener('keydown', modalCloseOnEsc)); 
}






















// function closeModalByEsc() {
//     if(event.code === "Escape"){
//    creatModal().close()
//     };
// }


// function closeModal(){
//      window.removeEventListener('keydown', closeModalByEsc);
//     console.log('lightbox not visible anymore')
// }





