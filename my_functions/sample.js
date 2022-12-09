

// const handler = async (event) => {
//     console.log('event',event)
  
//         return { statusCode: 200, body:JSON.stringify({message:"hey",event:event})};
    
// }

// module.exports = { handler }

'use strict';
const mongo = require('mongodb');
const { MongoClient } = mongo;
let db = null;

let connectToDatabase = (uri, dbName) => {
  if (db && db.serverConfig.isConnected()) {
    return Promise.resolve(db);
  }
  return MongoClient.connect(uri, { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
    db = client.db(dbName);
    return db;
  });
};

let getData = (db, table, query={}) => {
  return db
    .collection(table)
    .findOne();
}

module.exports.handler = async event => {
  const dbConnection = await connectToDatabase(process.env.MONGODB_URI,process.env.MONGODB_DATABASE);
  const data = await getData(dbConnection, process.env.MONGODB_COLLECTION);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};