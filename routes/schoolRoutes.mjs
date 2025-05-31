import express from 'express'

const schoolRoutes = express.Router();


schoolRoutes.get('/schools',(req,res)=>{
    res.send('This is school router')
})
schoolRoutes.get('/class',(req,res)=>{
    res.send('This is class router')
})


export default schoolRoutes

