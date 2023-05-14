import express from 'express'
import { homeController } from '../controllers/homeController.js';

const homeRoute=express.Router()

homeRoute.get("/:firstname",homeController)



export default homeRoute;