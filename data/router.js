const express = require('express');
const Posts = require('./db.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retreiving the posts.' });
    };
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.param.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found.' })
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retreiving the post.' });
    };
});

router.post('/', async (req, res) => {
    try {
        const post = await Posts.add(req.body);
        res.status(201).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding the post.' });
    };
});

router.delete('/:id', async (req, res) => {
    try {
        if (count > 0) {
            res.status(200).json({ message: 'The post is dead. Long live the post.' });
        } else {
            res.status(404).json({ message: 'The post could not be found.' });
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'The attempt on the post failed.' });
    };
});

router.put('/:id', async (req, res) => {
    try {
        const post = await Posts.update(req.param.id, req.body);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'The post could not be found.' });
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error changing the post.' })
    }
})