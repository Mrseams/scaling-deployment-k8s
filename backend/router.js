import express from "express"
import * as controller from './controllers/PostController.js';

const router = express.Router();


// Create a post
router.post('/', controller.createPost)

// Read all posts
router.get('/', controller.getPosts)

// Read a single post
router.get('/:id', controller.getPostById)

// Update a post
router.put('/:id', controller.updatePost)

// Delete a post
router.delete('/:id', controller.deletePost)


export default router
