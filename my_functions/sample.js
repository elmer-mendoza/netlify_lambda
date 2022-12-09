

const handler = async (event) => {
    console.log('event',event)
  
        return { statusCode: 200, body:JSON.stringify({message:"hey",event:event})};
    
}

module.exports = { handler }