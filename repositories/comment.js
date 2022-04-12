const Db = require('../models');

async function addComment(comment) {
    const novedades = await Db.Comment.create(comment);
    return novedades;
}

module.exports = { addComment };