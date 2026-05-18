import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import CalificacionesService from './../services/calificaciones-service.js';

const router = Router();
const currentService = new CalificacionesService();

router.get('', async (req,res)=>{
    try{
        console.log('CalificacionesController.get');

        const returnArray =
            await currentService.getAllAsync();

        res.status(StatusCodes.OK)
           .json(returnArray);

    }catch(error){
        console.log(error);

        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
           .send(error.message);
    }
});

export default router;