const path = require('path');

const rootDir = require('../util/path');

exports.adminGetProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.adminPostProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}