//we import the Express library with require
const express = require('express');

// Instantiate the app here. This can then be used to start a server and specify server behavior.
const app = express();

app.use(express.json())

const PORT = 4001;

const blogs = []
// GET, POST, DELETE, PUT
app.listen(PORT, () => {
console.log(`Application running on port ${PORT}`)
})

app.get('/academy/blogs', (req, res, next) => {
res.status(200).json({
status: 'success',
code: 200,
data: blogs
})
})

app.post('/academy/blogs', (req, res, next) => {

const { title } = req.body

const blogExist = blog.find((element) => element.title === title);
if(blogExist){
return res.status(409).json({
status: 'error',
message: 'Blog post already exist',
code: 409,
data: null
})
}

blogs.push(req.body)

return res.status(201).json({
status: 'success',
message: 'Blog post added successfully',
code: 201,
data: blogs
})
})

app.put('/academy/blogs/:id', (req, res, next) => {
const { id } = req.params;
const { post, url, title, author } = req.body
const blogIndex = blogs.findIndex((element) => element.id === id)
if(blogIndex >= 0){
blogs[blogIndex] = {
...blogs[blogIndex],
post,
url,
author,
title
}

return res.status(200).json({
status: 'success',
message: 'Blog post updated successfully',
code: 200,
data: blogs
})
}

return res.status(400).json({
status: 'error',
message: 'Bog post not found',
code: 400,
data: null
})

})


app.delete('/academy/blogs/:id', (req, res, next) => {
const { id } = req.params;
const blogIndex = blogs.findIndex((element) => element.id === id)
if(blogIndex >= 0){
blogs.splice(blogIndex, 1);
return res.status(200).json({
status: 'success',
message: 'Blog post deleted successfully',
code: 200,
data: blogs
})
}

return res.status(400).json({
status: 'error',
message: 'Blog post not found',
code: 400,
data: null
})


})