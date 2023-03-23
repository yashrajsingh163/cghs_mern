const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send({"hello":"i ma called"})
})



router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}))
module.exports = router;