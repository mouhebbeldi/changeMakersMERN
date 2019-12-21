const express =require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt =require('bcryptjs');
const jwt = require ('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require ('config');
const jwtSecret = config.get('jwtSECRET');
// @route post /changeMakers/auth
// @desc register a user 
// @access public
router.post('/',[
    check('fullname','fullname is required').not().isEmpty(),
    check('email','email is unique and required ').isEmail(),
    check('password','password is required too').not().isEmpty()
  ] ,async (req , res ) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
const {fullname , email , password  }= req.body;
try {
    let user = await User.findOne({email});
    if(user ){
        return res.status(400).json({msg : 'user already exists'});
    }
    user = new User ({
        fullname,
        email,
        password
    });
    // const salt = await bcrypt.getSalt(10);/*idk why this is not working */
    // user.password= await bcrypt.hash(password, salt);/*idk why this is not working */
    await user.save();

   const payload ={
       user :{
           id: user.id
       }
   }
   jwt.sign(payload, jwtSecret,{
       expiresIn: 3600000
   },(err, token)=>{
        if(err) {throw err ;} 
        res.json({token});
   });

} catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
}
});

module.exports=router ;