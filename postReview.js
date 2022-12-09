const connectToMongoDB =require('../connectToMongoDB')

let getData = async( collection, query='') => {
  const dbConnection = await connectToMongoDB(process.env.MONGODB_URI);
  try {
    return dbConnection
      .db(process.env.MONGODB_DATABASE)
      .collection(collection)
      .find(query)
  } catch (error) {
    console.log(err)
  }finally{
    dbConnection.close()
  }
}

module.exports.handler = event => {
  
  const data = getData('reviews');
 
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};