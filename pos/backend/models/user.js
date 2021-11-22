const db = require('./database')
const bcrypt = require("bcryptjs")
const nodeMailer = require('nodemailer')
const crypto = require('crypto')

const sendMail = (email, token) => {
      let transporter = nodeMailer.createTransport({
        host: 'smtp-mail.outlook.com',                  
        service: 'outlook',                             
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3'                           
        },
        port: 587,                                     
        auth: {
          user: "test_restaurant211@outlook.com",
          pass: "Aw12345.?"
        }
    });
  const options = {
    from: "test_restaurant211@outlook.com",
    to: email,
    subject: "Reset password user",
    text: `Recover code is ${token}`
  }
  transporter.sendMail(options, function(err, info) {
    if(err) {
      console.log(err);
      return;
    }
    else {
      console.log(info.response)
    }
  })
}

exports.registerDataUser = async (email, name, phone, address, password, func) => {
    password = await bcrypt.hash(password, 10)
    db.query(
        "INSERT INTO _User (Email, User_Name, Phone, Address, User_Password, Role_of_user) VALUES (?, ?, ?, ?, ?, ?)",
        [email, name, phone, address, password, "guest"],
        (err) => {
            if(err) {
                func(err, "Email already exists!")
            }
            else { func(err, null) }
        }
    )
 }

exports.loginDataUser = (email, password, func) => {
    db.query(
        "SELECT * FROM _User WHERE Email = ? AND Role_of_user = ?",
        [email, "guest"],
        (err, result) => {
            if(err) { func(err, "Error occurrs!") }
            if(result.length > 0) {
                bcrypt.compare(password, result[0].User_Password, (error, response) => {
                    if(response) { func(err, null) }
                    else { func(error, "Wrong email or password!") }
                })
            }
            else { func(err, "Wrong email or password!") }
        }
    )
 }

 exports.forgotDataUser = (email, func) => {
    db.query(
        "SELECT * FROM _User WHERE Email = ? AND Role_of_user = ?",
        [email, "guest"],
        (err, result) => {
            if(err) {
                 func(err, "Error found!") }
            else {
                if (result.length > 0) {
                    const resetToken = crypto.randomBytes(20).toString('hex')
                    const passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
                    db.query(
                        "UPDATE _User SET passwordResetToken = ? WHERE email = ?",
                        [passwordResetToken, email]
                    )
                    sendMail(email, resetToken)
                    func(err, null) }
                else { func(err, "User does not exist") }
            }
        }
    )
 }

 exports.verifyResetToken = (token, func) => {
    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");
    db.query(
        "SELECT * FROM _User WHERE passwordResetToken = ?",
        [resetPasswordToken],
        (err, result) => {
            if(err) {
                 func(err, "Error found!") }
            else {
                if (result.length > 0) {
                    func(err, null) }
                else { func(err, "Reset password token is invalid!") }
            }
        }
    )
 }
 
 exports.updatePasswordToken = async (token, password, func) => {
    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");
    const newPassword = await bcrypt.hash(password, 10)
    db.query(
        "UPDATE _User SET User_Password = ? WHERE passwordResetToken = ?",
        [newPassword, resetPasswordToken],
        (err) => {
            if(err) {
                 func(err, "Error found!") }
            else {
                    func(err, null) 
            }
        }
    )
 }





