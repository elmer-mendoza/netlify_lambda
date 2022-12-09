

// 'use strict';
// const mongo = require('mongodb');
// const { MongoClient } = mongo;
// let db = null;

// let connectToDatabase = (uri, dbName) => {
//   if (db && db.serverConfig.isConnected()) {
//     return Promise.resolve(db);
//   }
//   return MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
//     db = client.db(dbName);
//     return db;
//   });
// };

const connectToMongoDB =require('../connectToMongoDB')

let getData = async( db,collection, query) => {

    return db.collection('resumeData').find();
    // return dbConnection
    //   .db(process.env.MONGODB_DATABASE)
    //   .collection(collection)
    //   .find(query)
  
}

module.exports.handler = async(event) => {
  const dbConnection = await connectToMongoDB('mongodb+srv://mdel_efm:Nov14151@mernshopping.jrbae.mongodb.net/?retryWrites=true&w=majority','resumeDB');
  const data = await getData(dbConnection,process.env.MONGODB_COLLECTION,{});
 
  return {
    statusCode: 200,
    // body: JSON.stringify({message:"pogi"}),
    body: JSON.stringify(data),
  };
};