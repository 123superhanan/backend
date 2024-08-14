import express from 'express';
import { Blog, getBlogs } from "../Controller/blogController.js";
import { BlogCategory, getBlogCategory } from "../Controller/blogCatControl.js";

const router = express.Router();

// Routes for handling blog creation and fetching
router.post('/create_blog', Blog);
router.get('/get_blogs', getBlogs);

// Routes for handling blog categories
router.post('/add_category', BlogCategory);
router.get('/get_categories', getBlogCategory);

// Example routes for handling static data (assuming `UserData` and `postData` are imported correctly)
router.get('/User', (req, res) => {
  try {
    res.json(UserData); // Send static user data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

router.get('/post', (req, res) => {
  try {
    res.json(postData); // Send static post data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch post data' });
  }
});

export default router;
