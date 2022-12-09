

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

const connectToDatabase =require('../connectMongoDB')

let getData = (db, table, query) => {
  return db
    .collection(table)
    .findOne(query);
}

module.exports.handler = async event => {
  const dbConnection = await connectToDatabase(process.env.MONGODB_URI,process.env.MONGODB_DATABASE,{});
  const data = await getData(dbConnection, process.env.MONGODB_COLLECTION);
  // const data = await getData(dbConnection, process.env.MONGODB_COLLECTION);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};