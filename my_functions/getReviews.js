const connectToMongoDB =require('../connectToMongoDB')
require('dotenv').config()

let getData = async(db,collection, query) => {
  try {
    return await db.collection(collection).find(query).toArray()
  } catch (err) {
    console.log(err)
  }
}

const handler = async(event) => {
  const dbConnection = await connectToMongoDB(process.env.MONGODB_URI,process.env.MONGODB_DATABASE);
  const data = await getData(dbConnection,'reviews',{});
 
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

module.exports = {handler}