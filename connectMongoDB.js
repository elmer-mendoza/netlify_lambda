'use strict';
const mongo = require('mongodb');
const { MongoClient } = mongo;
let db = null;

let connectToDatabase = (uri, dbName) => {
  if (db && db?.serverConfig?.isConnected()) {
    return Promise.resolve(db);
  }
  return MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
    db = client.db(dbName);
    return db;
  });
};

module.exports = connectToDatabase