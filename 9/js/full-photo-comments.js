import { generateComment } from './util.js';

const COMMENTS_PER_ACTION = 5;

const bigPictureContainer = document.querySelector('.big-picture');
const commentsContainerElement = bigPictureContainer.querySelector('.social__comments');
const commentsLoadButtonElement = bigPictureContainer.querySelector('.comments-loader');
const commentsCounterContainerElement = bigPictureContainer.querySelector('.social__comment-count');
const commentsShownCountElement = commentsCounterContainerElement.querySelector('.social__comment-shown-count');
const commentsTotalCountElement = commentsCounterContainerElement.querySelector('.social__comment-total-count');


const renderComments = (comments) => {
  let indexLastShownComment = 0;
  let indexNextShownComment = 0;

  return () => {
    indexNextShownComment = indexLastShownComment + COMMENTS_PER_ACTION;

    if (indexNextShownComment >= comments.length) {
      indexNextShownComment = comments.length;
      commentsLoadButtonElement.classList.add('hidden');
    }

    for (let index = indexLastShownComment; index < indexNextShownComment; index++) {
      commentsContainerElement.insertAdjacentHTML('beforeEnd', generateComment(comments[index]));
    }

    indexLastShownComment = indexNextShownComment;
    commentsShownCountElement.textContent = indexLastShownComment.toString();
  };
};

const addCommets = (comments) => {
  commentsTotalCountElement.textContent = comments.length.toString();

  while (commentsContainerElement.firstChild) {
    commentsContainerElement.firstChild.remove();
  }

  const renderNextComments = renderComments(comments);
  renderNextComments();
  commentsLoadButtonElement.addEventListener('click', renderNextComments);

  return renderNextComments;
};

const deleteComments = (callbackLink) => {
  commentsLoadButtonElement.classList.remove('hidden');
  commentsLoadButtonElement.removeEventListener('click', callbackLink);
};

export { addCommets, deleteComments };
