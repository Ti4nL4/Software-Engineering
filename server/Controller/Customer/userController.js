const { registerDataUser,
  loginDataUser,
  forgotDataUser,
  verifyResetToken,
  updatePasswordToken } = require('../../Model/user')

exports.registerUser = async(req, res) => {
    const { email, name, phone, address, password } = req.body;
    await registerDataUser(email, name, phone, address, password, function(err, message) {
    if(message) {
      res.status(401).json({success: false, message: message});
    }
    else {
      res.status(200).json({ 
        success: true,
        message: "",
        user: { email, name, phone, address, password }});
      }
    });
  }

exports.loginUser = async(req, res) => {
    const { email, password } = req.body;
    await loginDataUser(email, password, function(err, message) {
    if(message) {
      res.status(401).json({success: false, message: message});
    }
    else {
      res.status(200).json({ 
        success: true,
        message: "login_success",
        user: { email, password }});
      }
    });
  }

  exports.forgotUser = async (req, res) => {
    const { email } = req.body;
    await forgotDataUser(email, function(err, message) {
      if(message) {
        res.status(401).json({success: false, message: message});
      }
      else {
        res.status(200).json({ 
          success: true,
          message: "success",
        })
      }
    })
  }

  exports.resetToken = async (req, res) => {
    await verifyResetToken(req.params.token, function(err, message) {
      if(message) {
        res.status(401).json({success: false, message: message});
      }
      else {
        res.status(200).json({ 
          success: true,
          message: "success_token_verify",
        })
      }
    })
  }

  exports.resetUpdatePassword = async (req, res) => {
    const {token, newPassword} = req.body

    await updatePasswordToken(token, newPassword, function(err, message) {
      if(message) {
        res.status(401).json({success: false, message: message});
      }
      else {
        res.status(200).json({ 
          success: true,
          message: "Update password successfully!",
        })
      }
    })
  }
