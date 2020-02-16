const mongoose = require('mongoose');
const user1Schema = mongoose.Schema({
    name:String,
    email:{type:String,lowercase:true,required:true},
    password:String
})
//this is the middleware, it will ne called before saving record
user1Schema.pre('save',done=>{
    //check if password co mat va duoc sua doi
    if(this.password && this.isModified('password')){
       //goi ham hashPassword de tra ve mat khau da bam
       this.password = hashPassword(this.password)
    }

    //everything to done
    
    done()
})
console.log("ahihi")
module.exports = mongoose.model('user1',user1Schema)