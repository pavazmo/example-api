'use strict'
function loginUser(req, res){
  const body = req.body;
  res.send('Login User');
}
  
exports.loginUser = loginUser;
