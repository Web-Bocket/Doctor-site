const BlogModel = require('../models/blogModel.js');


const BlogOneFun = async (req, res) => {
    const { id } = req.params;

    try {
        const blogData = await BlogModel.findById(id);
        res.status(200).send(blogData);
    } catch (error) {
        console.log("Error while getting the blog Data" + error);
    }
}

const BlogGetFun = async (req, res) => {

    try {
        const blogData = await BlogModel.find();
        res.status(200).send(blogData);

    } catch (error) {
        console.log("Error while getting the blog Data" + error);
    }

}


const BlogPostFun = async (req, res) => {

    try {

        const { blogTitle, blogImage, blogPerson, blogDescription } = req.body;

        if (!blogTitle || !blogImage || !blogPerson || !blogDescription) {
            return res.status(401).json({ message: "Please fill all the fields" });
        }

        const Title = await BlogModel.findOne({ blogTitle: blogTitle });

        if (Title) {
            return res.status(401).json({ message: "This blog Already exits" });
        }

        const newBlog = new BlogModel({
            blogTitle,
            blogImage,
            blogPerson,
            blogDescription
        });

        const blogData = await newBlog.save();

        console.log(blogData);

        if (blogData) {
            res.status(200).json({ message: "Blog Data Saved Successfully" });
        } else {
            res.status(402).json({ error: "Blog Data did not saved." });
        }

    } catch (error) {

    }
}



const BlogDeleteFun = async (req, res) => {
    try {
        const blogId = req.params.id;
        const deletedBlog = await BlogModel.findByIdAndDelete(blogId);
        res.status(200).send("Blog deleted successfully");
    } catch (error) {
        console.log("Error while deleting the blog" + error);
        res.status(500).send("Error while deleting the blog");
    }
};

module.exports = { BlogGetFun, BlogOneFun, BlogPostFun, BlogDeleteFun };