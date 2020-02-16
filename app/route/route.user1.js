const User1 = require('./../controller/controller.user1')
const express = require('express');
const route = express();
route.route('/create').get(User1.list)
.post(User1.create)
route.route('/findone/:userId')
.get(User1.findId)
module.exports = route