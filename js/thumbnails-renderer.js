import { getGeneratedPosts } from './generate-data';

const thumbnailTeamplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsContainer = document.querySelector('.pictures');

const renderThumbnails = () => {
  const postsData = getGeneratedPosts();
  const thumbnailsFragment = document.createDocumentFragment();

  postsData.forEach(({id, url, description, likes, comments}) => {
    const thumbnail = thumbnailTeamplate.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');

    image.dataset.id = id;
    image.src = url;
    image.alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes.toString();
    thumbnail.querySelector('.picture__comments').textContent = comments.length.toString();

    thumbnailsFragment.append(thumbnail);
  });

  thumbnailsContainer.append(thumbnailsFragment);
};

export { renderThumbnails };
