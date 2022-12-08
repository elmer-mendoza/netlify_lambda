const { MongoClient } = require("mongodb");
require('dotenv').config()
// const mongoose = require('mongoose')

// mongoose
// .connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=>console.log('MongoDB connected...'))
// .catch(err=>console.log(err));

// const mongoClient = new MongoClient('mongodb+srv://mdel_efm:Nov14151@mernshopping.jrbae.mongodb.net/?retryWrites=true&w=majority');
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        // const collection = (await clientPromise).collection(process.env.MONGODB_COLLECTION);
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        // const database =  mongoose.Connection.db('resumeDB');
        // const collection = database.collection('resumeData');
        const results = await collection.find();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }