import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
          },
          title: {
            type: String,
            required: true
          },
          image: {
            type: String,
            required: true
          },
          category: {
            type: String,
            required: true
          },
          author: {
            type: String,
            required: true
          },
          authorInfo: {
            type: String,
            required: true
          },
          content: {
            type: String,
            required: true
          },
          Authorimage: {
            type: String,
            required: true
          },
          info: {
            type: String,
            required: true
          }
    }
)

const Blogs = mongoose.model('Blog', blogSchema)
export default Blogs;