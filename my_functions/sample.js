const { MongoClient } = require("mongodb");
require('dotenv').config()

const mongoClient = new MongoClient('mongodb+srv://mdel_efm:Nov14151@mernshopping.jrbae.mongodb.net/resumeDB?retryWrites=true&w=majority');
// const mongoClient = new MongoClient(process.env.MONGODB_URI);

// const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const clientPromise =await mongoClient.connect();
        console.log("Connected")
        // const collection = (await clientPromise).collection(process.env.MONGODB_COLLECTION);
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
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