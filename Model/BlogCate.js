import mongoose from "mongoose";

const blogCatSchema  = new mongoose.Schema(
    {
        cat_name: {
            type: String,
            required: true,
           
        },
       cat_des: {
            type: String,
            required: true,
        }

    }
);

const blogCat = mongoose.model("blog_category", blogCatSchema)
export default blogCat;