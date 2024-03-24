import { getGeneratedPosts } from './generate-data.js';
import { addCommets, deleteComments } from './full-photo-comments.js';

const bigPictureContainer = document.querySelector('.big-picture');
const imageElement = bigPictureContainer.querySelector('.big-picture__img').querySelector('img');
const closeButtonElement = bigPictureContainer.querySelector('.big-picture__cancel');
const descriptionImageElement = bigPictureContainer.querySelector('.social__caption');
const likesCountElement = bigPictureContainer.querySelector('.likes-count');

let linkWithRenderNextComments = function () {};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullPhoto();
  }
};
const onCloseButtonCleack = (evt) => {
  evt.preventDefault();
  closeFullPhoto();
};


function closeFullPhoto () {
  document.removeEventListener('keydown', onEscKeydown);
  closeButtonElement.removeEventListener('click', onCloseButtonCleack);

  document.body.classList.remove('modal-open');
  bigPictureContainer.classList.add('hidden');

  deleteComments(linkWithRenderNextComments);
}

const openFullPhoho = (idPosts) => {
  const postsData = getGeneratedPosts();
  const {url, description, likes, comments} = postsData[idPosts - 1];

  imageElement.src = url;
  imageElement.alt = description;
  descriptionImageElement.textContent = description;
  likesCountElement.textContent = likes.toString();

  linkWithRenderNextComments = addCommets(comments);

  document.addEventListener('keydown', onEscKeydown);
  closeButtonElement.addEventListener('click', onCloseButtonCleack);

  document.body.classList.add('modal-open');
  bigPictureContainer.classList.remove('hidden');
};

export { openFullPhoho };
