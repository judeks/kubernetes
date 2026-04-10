const db = require('../persistence');

module.exports = async function addItem(req, res) {
    const {v4 : uuid} = require('uuid');

    const item = {
        id: uuid(),
        name: req.body.name,
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
