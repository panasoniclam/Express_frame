const User1 = require('./../model/model.user1')
module.exports = {
    create: (req, res, next) => {
        // req.body = {
        //     name:'John Doe',
        //     email:'john.doe@gmail.com',
        //     password:'zxc123'
        // }
         
        let newUser1 = new User1({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        newUser1.save((error, record) => {
            if (error) {
                res.json({
                    message: 'error',
                    description: 'some error occoured while saving the user in database.'
                });
            } else {
                res.json({
                    message: 'success',
                    description: 'user details successfully saved.',
                    user: record
                });
            }
        });
    },
   list:(req,res,next)=>{
       User1.find({})
       .then(result=>{
           res.status(200).json({
               message:'success',
               description:'list user',
               result
           })
       })
       .catch(err=>{
           next(err)
       })
   },
   findId:(req,res,next)=>{
       const id = req.params.userId
       User1.findById({_id:id})
       .then(result=>{
           res.status(200).json({
              
               result:result
           })
       })
       .catch(err=>{
           next(err)
       })
   }
}