const db = require('../common/connect')

const Account = function (procduct) {
    this.account = procduct.account
    this.password = procduct.password
    this.role = procduct.role
}

Account.checkLogin = (result, acc , pass, role) => {
    db.query("select * from _User where User_name =? and User_PassWord=? and Role_of_user=?", [acc, pass, role], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err);
            return;
        }

        if (res.length === 0) result('Reject')
        else result('Accept')
    })
}

module.exports = Account