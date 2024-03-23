import { generatePosts } from './generate-data.js';
import { renderThumbnails } from './thumbnails-renderer.js';

const POSTS_NUMBER = 25;
generatePosts(POSTS_NUMBER);

renderThumbnails();
