var mongoose = require('mongoose');
var Person = mongoose.model('Person',{
    fname:String,
    mname:String,
    lname:String,
    address:{type:Schema.Types.ObjectId,ref:'Address'}
});
