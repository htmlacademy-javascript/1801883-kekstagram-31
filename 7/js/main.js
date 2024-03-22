import { generatePosts } from './generate-data.js';
import { renderThumbnails } from './thumbnail-renderer.js';

const POSTS_NUMBER = 25;
const postsData = generatePosts(POSTS_NUMBER);

renderThumbnails(postsData);
