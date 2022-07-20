if (process.env.NODE_ENV !== "production")
{
    require("dotenv").config()
}

module.exports= {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    CLOUDNAME:process.env.CLOUDNAME,
    APICLOUD:process.env.APICLOUD,
    SECRETCLOUD: process.env.SECRETCLOUD

    
}