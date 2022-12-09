'use strict';
const mongo = require('mongodb');
const { MongoClient } = mongo;
let db = null;

let connectToMongoDB = async(uri) => {
  // if (db && db.serverConfig.isConnected()) {
  //   return Promise.resolve(db);
  // }
  return await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
    db = client;
    return db;
  });
};

module.exports = connectToMongoDB