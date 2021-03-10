const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

const db = require('./queries')
app.get('/posts', db.getAllPosts)

app.get('/impacters/:impacter_id/posts', db.getPostsByImpacterId)

app.get('/posts/:post_id', db.getPostById)

app.put('/posts/update/:post_id', db.updatePost)

app.delete('/posts/delete/:post_id', db.deletePost)

app.put('/posts/create', db.createPost)

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`)
  })
}

module.exports = app
