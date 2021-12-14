import express from 'express';
import {
  deletePost,
  getPosts,
  updatePost,
  likePost,
} from '../controllers/posts.js';
import { createPost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likepost', auth, likePost);

export default router;
