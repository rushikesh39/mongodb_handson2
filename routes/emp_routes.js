const { insert, salary_gt_30k, exp_gt_2, yearGrad_gt_2015_exp_gt_2, updateSalary } = require("../controller/emp_controller")

const route=require("express").Router()
route.post('/insert',insert)
route.get("/salary_gt_30k",salary_gt_30k)
route.get("/exp_gt_2",exp_gt_2)
route.get("/yearGrad_gt_2015_exp_gt_2",yearGrad_gt_2015_exp_gt_2)
route.patch("/updateSalary",updateSalary)

module.exports=route