const http = require('http')


const server = http.createServer((req, res)=>{
res.end(JSON.stringify({message:'welcome to cerverapi'}))
})
server.listen(3500,(e)=>console.log('http://localhost:3500'))