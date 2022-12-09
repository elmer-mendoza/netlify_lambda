const connectToDatabase =require('../connectMongoDB')

let getData = (db, table, query) => {
  return db
    .collection(table)
    .find(query);
}

module.exports.handler = async event => {
  const dbConnection = await connectToDatabase(process.env.MONGODB_URI,process.env.MONGODB_DATABASE,{});
  try{
  const data = await getData(dbConnection, 'reviews');
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
  } finally {
    await dbConnection.close();
  }

};