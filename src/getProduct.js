module.exports.getProduct = function(req ,res){
    res.setHeader('Content-type','application/json')
    res.end(JSON.stringify({
        name:"back flip cover",
       brand:"apple",
       brnadModel:"iphonexr",
       price:120
    }))
}