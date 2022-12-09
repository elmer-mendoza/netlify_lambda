

const handler = async (event) => {
  console.log("event",event)
        return { status: 200, body:({message:"hey"}),headers:{
            'Access-Control-Allow-Origin': '*'
        } };
    
}

module.exports = { handler }