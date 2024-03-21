const thumbnailTeamplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsContainer = document.querySelector('.pictures');

const renderThumbnails = (postsData) => {
  const thumbnailsFragment = document.createDocumentFragment();

  postsData.forEach(({url, description, likes, comments}) => {
    const thumbnail = thumbnailTeamplate.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');

    image.src = url;
    image.alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes.toString();
    thumbnail.querySelector('.picture__comments').textContent = comments.length.toString();

    thumbnailsFragment.append(thumbnail);
  });

  thumbnailsContainer.append(thumbnailsFragment);
};


export { renderThumbnails };
