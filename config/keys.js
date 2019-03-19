module.exports = {
    MongoUri: 'mongodb://localhost:27017/nodelogin',
    
    //added
     mongoDB: process.env.MONGODB_URI || MongoUri
}