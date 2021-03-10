let db = require('./data/db-config.js')

const getAllPosts = async (req, res) => {
    try {
        const posts = await db('co_posts')
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ message: "Error getting posts" })
    }
}

const getPostsByImpacterId = async (req, res) => {
    const id = parseInt(req.params.impacter_id)
    try {
        const posts = await db('co_posts').where({ impacter_id: id })
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ message: "Error getting post" })
    }
}

const getPostById = async (req, res) => {
    const post_id = parseInt(req.params.post_id)
    try {
        const post = await db('co_posts').where({ post_id: post_id })
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({ message: "Error getting post" })
    }
}

const updatePost = async (req, res) => {
    const post_id = parseInt(req.params.post_id)
    const { description, data } = req.body
    try {
        await db('co_posts')
            .where({ post_id: post_id })
            .update({ description: description, data: data, updated_at: Date().toJSON });
        res.status(200).json("Post updated")
    } catch (err) {
        res.status(500).json({ message: "Error updating post" })
    }
}

const deletePost = async (req, res) => {
    const post_id = parseInt(req.params.post_id)
    try {
        await db('co_posts')
            .where({ post_id: post_id })
            .del();
        res.status(200).json("Post deleted")
    } catch (err) {
        res.status(500).json({ message: "Error deleting post" })
    }
}

const createPost = async (req, res) => {
    const { description, data, impacter_id } = req.body
    try {
        await db('co_posts')
            .insert({ description: description, type: "IMAGES", status: "VISIBLE", data: data, reaction_count: 0, impacter_id: impacter_id, published_at: null, created_at: Date().toJSON, updated_at: Date().toJSON})
        res.status(201).json("Post created")
    } catch (err) {
        res.status(500).json({ message: "Error creating post" })
    }
}

module.exports = {
    getAllPosts,
    getPostsByImpacterId,
    getPostById,
    updatePost,
    deletePost, 
    createPost, 
    db
}
