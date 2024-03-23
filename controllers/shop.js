const path = require('path');

const rootDir = require('../util/path');

exports.shopGetProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
}