const express=require('express')
const router=express.Router();
const {insert, findUserwithsalarygreaterthan30000,findUserwithEXPgreaterthan2,findUserwith_yearGrad_after2015_and_exp_greaterthan1,update}=require('../controller/userController')

router.post('/insert',insert)
router.get('/finduser30000',findUserwithsalarygreaterthan30000)
router.get('/finduser_exp2',findUserwithEXPgreaterthan2)
router.get('/findUserwith_yearGrad_after2015_and_exp_greaterthan1',findUserwith_yearGrad_after2015_and_exp_greaterthan1)
router.post('/update',update)
// router.post('/delete',deleteUser)
module.exports=router