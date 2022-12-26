const knex = require('knex');

module.exports.addUsers = async ( req, res) => {
    try{
        const { FCS, email } = req.body;

        if (!FCS || !email) throw 'cannot get data from body';

        knex('users')
            .insert(
                { 
                    FCS: FCS, 
                    email: email
                }
            );

        res.status(200);
    }catch(e){
        const error = new Error(e);
        res.status(500).send({error: error.message});
    }
}