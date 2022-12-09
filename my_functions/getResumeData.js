

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

let getData = async( collection, query) => {
  const dbConnection = await connectToMongoDB('mongodb+srv://mdel_efm:Nov14151@mernshopping.jrbae.mongodb.net/?retryWrites=true&w=majority','resumeDB');
  try {
   
    return dbConnection.collection('resumeData').find();
    // return dbConnection
    //   .db(process.env.MONGODB_DATABASE)
    //   .collection(collection)
    //   .find(query)
  } catch (error) {
    console.log(err)}
  // }finally{
  //   dbConnection.close()
  // }
}

module.exports.handler = async(event) => {
  
  const data = await getData(process.env.MONGODB_COLLECTION,{});
 
  return {
    statusCode: 200,
    // body: JSON.stringify({message:"pogi"}),
    body: JSON.stringify(data),
  };
};