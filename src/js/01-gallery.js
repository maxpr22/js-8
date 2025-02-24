import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


console.log(galleryItems);

const galleryList = document.querySelector(".gallery")
const markup = createGalleryMarkup(galleryItems)
galleryList.insertAdjacentHTML('beforeend', markup)

const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();

function createGalleryMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`
    }).join("")
}


