import blogcat from "../Model/UserModel.js";


export const blogcat = async (req, res) => {
    try {
        const blogCat = await new BlogCat(req.body);
        blogCat.save();
        res.status(200).json({ msg: 'Blog Category Created!' });
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getBlogCategory = async (req, res) => {
    let blogsCat;
    try {
        blogsCat = await BlogCat.find({});
        res.status(200).json(blogsCat);
    } catch (error) {
        res.status(500).json(error);
    }
}