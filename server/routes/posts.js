import express from 'express';
import { deletePost, getPosts, updatePost } from '../controllers/posts.js';
import { createPost } from '../controllers/posts.js';
const router = express.Router();
router.get('/', getPosts).post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
