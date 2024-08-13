import Blogs from "../modal/blog-modal.js";

export const Blog = async (req, res) => {
    try {
        const blogs = new Blogs(req.body);
        await blogs.save();
        res.status(200).json({ msg: 'Blog Created!', blog: blogs });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create blog', details: error });
    }
}

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find({});
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blogs', details: error });
    }
}
