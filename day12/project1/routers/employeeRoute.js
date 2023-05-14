import express from 'express'
import { getemployee,postemployee,putemployee,patchemployee,deleteemployee } from '../controllers/employeeController.js'
const employeeRoute=express.Router()

employeeRoute.get('/',getemployee)

employeeRoute.get('/getemployee/:id/:name',getemployee)
employeeRoute.post('postemployee/:id/:name',postemployee)
employeeRoute.put('/putemployee/:id/:name',putemployee)
employeeRoute.patch('/patchemployee/:id/:name',patchemployee)
employeeRoute.delete('/deleteemployee/:id/:name',deleteemployee)

export default employeeRoute;