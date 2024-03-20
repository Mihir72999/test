const http = require('http')
const {getProduct} = require('./src/getProduct')

const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({message:'welcome to cerverapi'}))
}else if(req.url === '/getProduct'){
     getProduct(res)

}else{
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({
        message:"path not found which you entered"
    }))
}

})
server.listen(3500,(e)=>console.log('http://localhost:3500'))