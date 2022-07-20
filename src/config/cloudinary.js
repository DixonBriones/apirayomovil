const cloudinary = require("cloudinary").v2;
const {CLOUDNAME,APICLOUD,SECRETCLOUD}=require('./index');

cloudinary.config({ 
    cloud_name: CLOUDNAME, 
    api_key: APICLOUD, 
    api_secret: SECRETCLOUD 
});

module.exports = cloudinary;