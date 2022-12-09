const connectToDatabase =require('../connectMongoDB')

let getData =async (db, table, query) => {
  
  try{
    return await db
        .collection(table)
        .find(query);
  } catch (err) {
    console.log(err); // output to netlify function log
  } finally {
    await db.close();
  }
  
}

module.exports.handler = async event => {
  const dbConnection = await connectToDatabase(process.env.MONGODB_URI,process.env.MONGODB_DATABASE,{});
  const data = await getData(dbConnection, 'reviews');
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };


};