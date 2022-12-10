

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

// const connectToMongoDB =require('../connectToMongoDB')

'use strict';
const mongo = require('mongodb');
const { MongoClient } = mongo;
require('dotenv').config();
let db = null;

let connectToMongoDB = (uri,dbName) => {
  if (db && db.serverConfig.isConnected()) {
    return Promise.resolve(db);
  }
  return MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
    db = client.db(dbName);
    return db;
  });
};

let getData = async( db,collection, query) => {

    return await db.collection(collection).find(query);
    // return dbConnection
    //   .db(process.env.MONGODB_DATABASE)
    //   .collection(collection)
    //   .find(query)
  
}

 const handler = async(event) => {
  const dbConnection = await connectToMongoDB(process.env.MONGODB_URI,process.env.MONGODB_DATABASE);
  const data = await getData(dbConnection,process.env.MONGODB_COLLECTION,{});
 
  return {
    statusCode: 200,
    // body: JSON.stringify({message:"pogi"}),
    body: JSON.stringify(data),
  };
};

module.exports = {handler}