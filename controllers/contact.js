const path = require('path');

const rootDir = require('../util/path');

exports.contactGetProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contact.html'));
}

exports.contactPostProduct = (req, res, next) => {
    console.log(req.body);
    res.send('<html><h3>Form successfully submitted</h3></html>');
}