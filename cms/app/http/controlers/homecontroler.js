class homeControler{ 

    index(req,res){

        res.json('home')
    }


}

module.exports = new homeControler()