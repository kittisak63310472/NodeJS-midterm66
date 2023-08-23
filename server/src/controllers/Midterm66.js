module.exports ={

    add1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ input)
        output = input + 1
        res.send(output.toString())
    },

    number (req,res){
        X = parseInt(JSON.stringify(req.body['X']))
        console.log('X = '+ X)
        output = X + X
        res.send(output.toString())
    },

    

    

}