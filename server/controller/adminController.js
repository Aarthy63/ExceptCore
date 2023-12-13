const Content = require('../model/contentSchema');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const adminschema = require('../model/adminSchema')
require("dotenv").config();
// const {generateOTP} = require('../middleware/generateOTP')
const path = require("path");
const User = require('../model/schema');
const speakEasy = require('@levminer/speakeasy')
const qrCode = require('qrcode')
require('dotenv').config()

// const { error } = require('console');

exports.getsingleuser = (req, res, next) => {
  console.log(req.params.id);
  const userid = req.params.id;
  try {
      User.findOne({ _id: userid })
          .then((data) => res.json({ data }))
          .catch((err) => res.json(err));
  } catch (error) {
      console.log(error);
  }
}


exports.contents = async (req, res) => {
    try {
     console.log(req.body);
     const { content, editorData } = req.body;

     const newContent = new Content({
        content,
        editorData
     })
     await newContent.save();
      res.status(200).json({ message: "Content Added Successfully!" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Something went wrong", error: error.message });
    }
  };

  exports.getContents = async (req, res) => {
    console.log(req.body);
    try {
      await Content.find({})
      .then((data) => res.json({ data }))
      .catch((err) => res.json(err));
  
    } catch (error) {
      res
        .status(400)
        .json({ message: "Something went wrong", error: error.message });
    }
  };

  exports.getContent = async (req, res) => {
    console.log(req.params.id);
    const userid = req.params.id;
    try {
        await Content.findOne({ _id: userid })
            .then((data) => res.json({ data }))
            .catch((err) => res.json(err));
    } catch (error) {
        console.log(error);
    }
};


exports.updatecontent = async (req, res) => {

  try {
    const contentId = req.params.id;
    // console.log(contentId);

    const updatedContent = req.body.updatedData;
    // console.log(updatedContent);

    await Content.findOneAndUpdate(
      { _id: contentId },
      {
        $set: {
         editorData: updatedContent
        },
      },
      { new: true }
    );

    res.status(200).json({ message: "Report updated successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// exports.registerSingledata = async (req, res, next) => {
//   console.log(req.body);
//   const userId = req.params.id; // Extract user ID from request params
//  console.log(userId);
//   try {
//     const user = await User .findById({ _id: userId }); // Find the user with the specified ID

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' }); // Handle user not found error
//     }
//     return res.status(200).json({ data: user }); // Return user data
//   } catch (error) {
//     console.error(error); // Handle server-side errors
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// };


// exports.post = async (req, res) => {
//   try {
//       console.log(req.body.formData);
//       const username = req.body.formData.username
//       const email = req.body.formData.email
//       const password = req.body.formData.password
//       const pattern = req.body.formData.pattern
//       const patternString = JSON.stringify(pattern);
//       const newAdmin = new adminSchema({
//           username,
//           email,
//           password,
//           pattern: patternString,
//       })
//       await newAdmin.save();
//       res.status(200).json({ message: "Admin Registered successfully" });
//   } catch (error) {
//       res.status(401).json({ message: "Registration failed", error: error.message });
//   }
// };




// exports.forgetPasswordverifyOtp = async (req, res) => {
//   // console.log(req.body);
//   try {
//       const { otp, id } = req.body
//       const user = await adminSchema.findOne({ _id: id  })
//       console.log(user);
//       if (!(otp === user.otp.code)) {
//           return res.status(404).json({ message: 'Your OTP Wrong' })
//       } else {
//           res.status(200).json({ message: 'OTP Verified' })
//       }
//   } catch (err) {
//       res.status(500).json({ message: "Internal Error" })
//   }
// };

// exports.setNewPassword = async (req, res) => {
//   console.log(req.body);
//   try {
//       const { password, id } = req.body
//       const hashPassword = await bcrypt.hash(password, 10)
//       await adminSchema.updateOne({ _id: id }, { $set: { password: hashPassword } })
//       res.status(200).json({ message: 'Password Updated' })
//   } catch (err) {
//       res.status(500).json({ message: "Internal Error" })
//   }
// }

// exports.changePassword = async (req, res) => {
//   console.log(req.body);
//   try {
//       const {  id, password, newPassword } = req.body
//       const user = await adminSchema.findOne({ _id: id })
//       // console.log(user);
//       if (!user) {
//           return res.status(400).json({ message: "Login failed, user not found" });
//       }
//       const passwordMatch = await bcrypt.compare(password, user.password);
//       if (!passwordMatch) {
//           return res.status(400).json({ message: "incorrect old password" });
//       }
     
//       const hashPassword = await bcrypt.hash(newPassword, 10)

//       await adminSchema.updateOne({ _id: id }, { $set: { password } })
//       res.status(200).json({ message: 'Password Updated' })
//   } catch (err) {
//       res.status(500).json({ message: "Please Check Your Old Password" })
//   }
// };

// exports. handleAdminLoginVerify = async (req, res) => {
//   try {
//       // console.log(req.body);
//       const { email, password, pattern } = req.body;
//       const loginAdminData = await adminSchema.findOne({ email })

//       if (!loginAdminData) {
//           return res.status(404).json({ message: "Please enter Correct Email" });
//       }
//       const patternverify = JSON.stringify(pattern);
//       const verifyPassword = await bcrypt.compare(password, loginAdminData.password)
//       if (!verifyPassword) {
//           return res.status(404).json({ message: "please enter correct password" });
//       } else if (loginAdminData.pattern !== patternverify) {
//           return res.status(404).json({ message: "please enter correct pattern" });
//       } else {
//           const jwtToken = jwt.sign(
//               { id: loginAdminData._id },
//              ' process.env.ACCESS_TOKEN_SECERT',
//               { expiresIn: '1h' }
//           )
//           return res.status(200).json({ message: "Admin-Login sucessfully!", id: loginAdminData._id, token: jwtToken });
//       }
//   } catch (error) {
//       res.status(500).json({ message: 'Error Generating Admin Login', error: error.message })
//   }
// }


// exports. generateTwoFactorCode = async (req, res) => {
//   try {
//     const { id } = req.body;
//     console.log(id);
//     // console.log(req.body, "secret");
//     const secretCode = speakEasy.generateSecret();
//     await adminSchema.updateOne(
//       { id: id },
//       { $set: { temp_secret: secretCode } }
//     );
//     const twoFactorAuthData = await adminSchema.findOne({ _id: id });

//     console.log(twoFactorAuthData);
//     // generating QrCode Img Src
//     qrCode.toDataURL(
//       twoFactorAuthData.temp_secret.otpauth_url,
//       function (err, data) {
//         if (err) {
//           return res.status(404).json({ message: "Generating QrCode Error" });
//         }
//         res.status(200).json({
//           message: "Generate TwoFactorAuth",
//           twoFactorAuthData,
//           qrCodeImgSrc: data,
//         });
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something Went Wrong" });
//   }
// }



// exports. loginTwoFactorVerify = async (req, res) => {
//   try {
//       const { id, token } = req.body
//       console.log(id, token);
//       const getUser = await adminSchema.findOne({ _id: id })
//       const { base32: secret } = getUser.temp_secret
//       let tokenValidates = speakEasy.totp.verify({
//           secret,
//           encoding: "base32",
//           token,
//       })
//       let qrCodeVerify = speakEasy.totp.verify({
//           secret: getUser.temp_secret.ascii,
//           encoding: 'ascii',
//           token
//       })
//       if (!qrCodeVerify) {
//           return res.status(401).json({ message: 'Authentication Invalid' })
//       }
//       if (!tokenValidates) {
//           return res.status(401).json({ message: 'Authentication Invalid Token' })
//       }
//       await adminSchema.updateOne({ _id: id }, { $set: { temp_secret: null, secret: getUser.temp_secret, authVerify: true } })
//       const updateUser = await adminSchema.findOne({ _id: id })
//       res.status(200).json({ message: 'Authentication Verified', twoFactorAuth: updateUser.twoFactorAuth, })

//   } catch (err) {
//       res.status(500).json({ message: 'Error Generating Authencation verify ', error: err.message })
//   }
// }



// exports. disableTwoFactorAuthentication = async (req, res) => {
//   try {
//       const { id } = req.body
//       await adminSchema.updateOne({ _id: id }, { $set: { secret: null, authVerify: false } })
//       res.status(200).json({ message: 'Disabled Your Authetication' })

//   } catch (error) {
//       res.status(500).json({ message: 'Error Disable Your Authentication', error: error.message })
//   }
// };



// exports.oldPattern = async (req, res) => {
//   // const { email, password, pattern } = req.body;
//   console.log(req.body, "req");

//   // const string1 = JSON.stringify(arr1);
//   const pattern = JSON.stringify(req.body.oldPattern);

//   try {

//       const handleOldPassword = await adminSchema.findOne({
//           _id: req.body.adminId
//       })

//       if (pattern === handleOldPassword.pattern) {
//           return res.status(200).json({ message: 'password valid successfully' })
//       }

//       else {
//           return res.status(401).json({ message: ' invalid password' })
//       }

//   }
//   catch (err) {
//       console.log(err);
//   }
// };

// exports.verifyemail = async (req, res) => {
//   const { email } = req.body;
//   const loginUser = await adminSchema.findOne({
//     email: email,
//   });
//   try {
//     if (!loginUser) {
//       return res.status(404).json({ message: "Please enter Correct Email" });
//     } else {
//       return res.status(200).json({ message: "Email Verified" });
//     }
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// exports.forgotPattern = async (req, res) => {
//   const { newpattern, id } = req.body;
//   const patt = JSON.stringify(newpattern);

//   try {
//     const exisistPattern = await adminSchema.findOne({
//       _id: id,
//     });

//     if (patt === exisistPattern.pattern) {
//       return res.status(409).json({ message: "Already exisistPattern " });
//     }
//     await adminSchema.updateOne({ _id: id }, { $set: { pattern: patt } });
//     res.status(200).json({ message: "NewPattern Updated" });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// exports.newPattern = async (req, res) => {
//   const { newPattern, adminId } = req.body;
//   console.log(newPattern, adminId, "aas");
//   const pattern = JSON.stringify(newPattern);

//   try {
//       const exisistPattern = await adminSchema.findOne({
//           _id: adminId,
//       });

//       if (pattern === exisistPattern.pattern) {
//           return res.status(409).json({ message: "Already exisistPattern " });
//       }
//       await adminSchema.updateOne({ _id: adminId }, { $set: { pattern: pattern } });
//       res.status(200).json({ message: "NewPattern Updated" });
//   } catch (error) {
//       res.status(404).json({ message: error.message });
//   }
// };

exports.kycList = async (req, res) => {
  try {
      await User.find({})
          .then((data) => res.json({ data }))
          .catch((err) => res.json(err));
  } catch (error) {
      res.status(500).json({ error: 'Error in registerlist' })
  }
}



exports.singleKycData = async (req, res) => {
  const id = req.params.id
  console.log(id);
  try {
      const SingleKyc = await User.findOne({ _id: id })
      res.status(200).json({ SingleKyc })
  } catch {
      res.status(500).json({ error: 'Error in SingleKycData' });

  }
}

exports.KycApprove = async (req, res) => {
  const { id } = req.body
  try {
      const KycApproveUpdate = await User.updateOne({ _id: id }, {
          $set: {
              kycVerifiy: true, waitingStatus: false
          }, $unset: { messsage: "" }
      })
      res.status(200).json({ KycApproveUpdate })

  } catch {
      res.status(500).json({ error: 'Error in KycApprovation' });
  }
}

exports.KycReject = async (req, res) => {
  const { id, Reason } = req.body
  try {
      const KycRejectUpdate = await User.updateOne({ _id: id }, {
          $set: {
              kycVerifiy: false, messsage: Reason
          }
      })
      res.status(200).json({ KycRejectUpdate })
  } catch {
      res.status(500).json({ error: 'Error in KycRejection' });

  }
}


exports.adminlogin = async (req, res) => {
  const { email, password, pattern } = req.body;
  const loginAdmin = await adminschema.findOne({
    email: email,
  });
  // console.log(loginAdmin.authVerify);
  if (!loginAdmin) res.status(404).json({ message: "Please enter Correct Email" });
const patternverify = JSON.stringify(pattern);
try {
  const decodedPwd = await bcrypt.compare(password, loginAdmin.password)
  if (!decodedPwd) {
    return res.status(404).json({ message: "please enter correct password" });
  } else if (loginAdmin.pattern !== patternverify) {
    return res.status(404).json({ message: "please enter correct pattern" });
  } else 
  {
    const adminId=loginAdmin._id 
    const token = jwt.sign({  adminId:loginAdmin._id }, 'secretKey', { expiresIn: "1h" });
    return res.status(200).json({ message: `Admin Login sucesssfully 
     `, adminId,token,authVerify:loginAdmin.authVerify });
  }
} catch (error) {
  console.log(error,'adminlogin error');
}
};


exports. generateTwoFactorCode = async (req, res) => {
  const { id } = req.body
  console.log(id);
try {

    // checking Already Verified User
    const secretCode = speakEasy.generateSecret()

    await adminschema.updateOne({ _id: id }, { $set: { temp_secret: secretCode } })
    const twoFactorAuthData = await adminschema.findOne({ _id: id })

    // generating QrCode Img Src
    qrCode.toDataURL(twoFactorAuthData.temp_secret.otpauth_url, function (err, data) {
        if (err) {
            return res.status(404).json({ message: 'Generating QrCode Error' })
        }
        res.status(200).json({ message: 'Generate TwoFactorAuth', authCode: secretCode.base32, qrCodeImgSrc: data, twoFactorAuthData })
    })

} catch (error) {
    res.status(500).json({ message: 'Error Generating TwoFactor Secret', error: error.message })
}
}



exports.loginTwoFactorVerify = async (req, res) => {
try {
    const { id, token } = req.body
    console.log(id, token);
    const getUser = await adminschema.findOne({ _id: id })
    const { base32: secret } = getUser.temp_secret

    let tokenValidates = speakEasy.totp.verify({
        secret,
        encoding: "base32",
        token,
    })

    let qrCodeVerify = speakEasy.totp.verify({
        secret: getUser.temp_secret.ascii,
        encoding: 'ascii',
        token
    })
    if (!qrCodeVerify) {
        return res.status(401).json({ message: 'Authentication Invalid' })
    }
    if (!tokenValidates) {
        return res.status(401).json({ message: 'Authentication Invalid Token' })
    }

    await adminschema.updateOne({ _id: id }, { $set: { temp_secret: null, secret: getUser.temp_secret, authVerify: true } })
    const updateUser = await adminschema.findOne({ _id: id })
    res.status(200).json({ message: 'Authentication Verified', twoFactorAuth: updateUser.twoFactorAuth, })

} catch (err) {
    res.status(500).json({ message: 'Error Generating Authencation verify ', error: err.message })
}
}



exports. disableTwoFactorAuthentication = async (req, res) => {
try {
    const { id } = req.body
    await adminschema.updateOne({ _id: id }, { $set: { secret: null, authVerify: false } })
    res.status(200).json({ message: 'Disabled Your Authetication' })

} catch (error) {
    res.status(500).json({ message: 'Error Disable Your Authentication', error: error.message })
}
}
 

exports.adminpasswordchange = async (req, res) => {
  const { oldPassword, newPassword } = req.body.data

  const { id } = req.body
  const loginexists = await adminschema.findOne({ _id: id })
  const adminpswdecrypt = await bcrypt.compare(oldPassword, loginexists.
      password)
  const newpassworddata = await bcrypt.compare(newPassword, loginexists.
      password)
  console.log(loginexists);
  try {
      if (!adminpswdecrypt) {
          return res.status(401).json({ message: 'password mis-match' })
      }
      else if (newpassworddata) {
          return res.status(401).json({ message: 'both old and new password same!' })
      }
      else {
          const encryptnewpassword = await bcrypt.hash(newPassword, 10)
          await adminschema.updateOne({ _id: id }, {
              $set: { password: encryptnewpassword }
          })
          return res.status(200).json({ message: 'Admin Password changed sucessfully!' });
      }
  }
  catch (error) {
      console.error(error.message);
      res.status(500).send('network error');
  }
}


exports.oldPattern = async (req, res) => {
  const pattern = JSON.stringify(req.body.oldpattern);
  try {
      const handleOldPassword = await adminschema.findOne({
          _id:req.body.adminId
      })
      if (pattern === handleOldPassword.pattern) {
          return res.status(200).json({ message: 'pattern valid successfully' })
      }
      else {
          return res.status(401).json({ message: ' invalid pattern' })
      }
  }
  catch (error) {
      console.log(error,'admin changepattern error');
  }
}
exports.forgotpattern = async (req, res) => {
  const { newpattern, id } = req.body;
  const patt = JSON.stringify(newpattern);

  try {
      const exisistPattern = await adminschema.findOne({
          _id: id,
      });

      if (patt === exisistPattern.pattern) {
          return res.status(409).json({ message: "Already exisistPattern " });
      }
      await adminschema.updateOne({ _id: id }, { $set: { pattern: patt } });
      res.status(200).json({ message: "NewPattern Updated" });
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

exports.updatePattern = async (req, res) => {
  // console.log(req.body);
  const { newpattern, adminId } = req.body;
  const pattern = JSON.stringify(newpattern);

  try {
      const exisistPattern = await adminschema.findOne({
          _id: adminId,
      });

      if (pattern === exisistPattern.pattern) {
          return res.status(409).json({ message: "Already exisist Pattern " });
      }
      await adminschema.updateOne({ _id: adminId },
           { $set: { pattern: pattern } });
      res.status(200).json({ message: "NewPattern Updated sucessfully" });
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};



exports.verifyEmail = async (req, res) => {
  // console.log(req.body);
  try {
      const { email } = req.body
      const adminData = await adminschema.findOne({ email })
      if (!adminData) {
          return res.status(401).json({ message: 'User Not Found' })
      }
      res.status(200).json({ message: 'Email Verified', adminData })
  } catch (err) {
      res.status(500).json({ message: 'Internal Server Error', error: err.message })
  }

}


exports.LoginTwoFactorVerify = async (req, res) => {
  // console.log(req.body);
  try {
      const { id, token } = req.body
      console.log(id, token);
      const getUser = await adminschema.findOne({ _id: id })

      let tokenValidates = speakEasy.totp.verify({
          secret: getUser.secret.base32,
          encoding: "base32",
          token,
      })

      let qrCodeVerify = speakEasy.totp.verify({
          secret: getUser.secret.ascii,
          encoding: 'ascii',
          token
      })
      if (!qrCodeVerify) {
          return res.status(401).json({ message: 'Authentication Invalid' })
      }
      if (!tokenValidates) {
          return res.status(401).json({ message: 'Authentication Invalid Token' })
      }
      res.status(200).json({ message: 'Authentication Verified', })

  } catch (err) {
      res.status(500).json({ message: 'Error Generating Authencation verify ', error: err.message })
  }
}



exports.setpassword = async (req, res) => {
  // console.log(req.body.password);
  try {
      const { password, id } = req.body
      const changePassword = await bcrypt.hash(password, 10)
      await adminschema.updateOne({ _id: id }, { $set: { password:changePassword } })
      res.status(200).json({ message: 'Password Updated' })
  } catch (err) {
      res.status(500).json({ message: "Internal Error", error: err.message })
  }
}




exports.setpattern = async (req, res) => {
  const { newpattern, id } = req.body;
  const patt = JSON.stringify(newpattern);

  try {
      const exisistPattern = await adminschema.findOne({
          _id: id,
      });

      if (patt === exisistPattern.pattern) {
          return res.status(409).json({ message: "Already exisistPattern " });
      }
      await adminschema.updateOne({ _id: id }, { $set: { pattern: patt } });
      res.status(200).json({ message: "NewPattern Updated" });
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};