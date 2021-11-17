const Account = require('../models/login.model')

exports.checkLogin = (req, res) => {
    const result = data => res.send(data)
    Account.checkLogin(result, req.body.account, req.body.password,req.body.role)
}