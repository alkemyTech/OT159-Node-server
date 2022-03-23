const serviceNews = require('../services/news');
const { check, validationResult, body } = require('express-validator');

const controllerNews = async function (req, res, next) {
    try {
        await check('name').notEmpty().run(req);
        await check('image').notEmpty().run(req);
        await check('content').notEmpty().run(req);
        //await check('categoryId').notEmpty().run(req);
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        const data = {
            name: req.body.name,
            content: req.body.content,
            image: req.body.image
        }
        data1 = await serviceNews.save(data);
        res.status(201).json('the news were successfully saved ')
        return data1
    } catch (error) {
        next(error)
        throw new Error("something happened")
    }
}

module.exports = { controllerNews };