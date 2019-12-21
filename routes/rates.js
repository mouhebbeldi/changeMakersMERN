const express =require('express');
const router = express.Router();

const Rates = require('../models/Rates');

const { check, validationResult } = require('express-validator');
const config = require ('config');

// @route post /changeMakers/rates
// @desc make a rate
// @access public
router.post('/',[
    check('rateMe','rate is required').isLength({ min: 1, max:3 }),
    check('email','email is unique and required ').isEmail()
  ] ,async (req , res ) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
const {rateMe , email }= req.body;
try {
        let rate = await Rates.findOne({email});
        if(rate ){
            return res.status(400).json({msg : 'you just rated me now'});
        }
        rates = new Rates ({
            rateMe,
            email
        });
        await rates.save();
        res.send('thns for rating me');
} catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
}
});
module.exports=router ;