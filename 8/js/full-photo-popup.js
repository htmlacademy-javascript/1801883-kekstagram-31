import { getGeneratedPosts } from './generate-data.js';
import { generateComment } from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const imageElement = bigPictureContainer.querySelector('.big-picture__img').querySelector('img');
const closeButtonElement = bigPictureContainer.querySelector('.big-picture__cancel');
const descriptionImageElement = bigPictureContainer.querySelector('.social__caption');
const likesCountElement = bigPictureContainer.querySelector('.likes-count');

const commentsContainerElement = bigPictureContainer.querySelector('.social__comments');
const commentsLoadButtonElement = bigPictureContainer.querySelector('.comments-loader');
const commentsCounterElement = bigPictureContainer.querySelector('.social__comment-count');
const commentsShownCountElement = commentsCounterElement.querySelector('.social__comment-shown-count');
const commentsTotalCountElement = commentsCounterElement.querySelector('.social__comment-total-count');

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
}

const openFullPhoho = (idPosts) => {
  const postsData = getGeneratedPosts();
  const {url, description, likes, comments} = postsData[idPosts - 1];

  imageElement.src = url;
  imageElement.alt = description;
  descriptionImageElement.textContent = description;
  likesCountElement.textContent = likes.toString();
  commentsTotalCountElement.textContent = comments.length.toString();
  commentsShownCountElement.textContent = comments.length.toString();

  while (commentsContainerElement.firstChild) {
    commentsContainerElement.firstChild.remove();
  }
  comments.forEach((comment) => commentsContainerElement.insertAdjacentHTML('beforeEnd', generateComment(comment)));


  document.addEventListener('keydown', onEscKeydown);
  closeButtonElement.addEventListener('click', onCloseButtonCleack);

  commentsCounterElement.classList.add('hidden');
  commentsLoadButtonElement.classList.add('hidden');
  document.body.classList.add('modal-open');
  bigPictureContainer.classList.remove('hidden');
};

export { openFullPhoho };
