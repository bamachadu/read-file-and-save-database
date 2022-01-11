import { saveDataFromFile } from '../../controller';
import { Router, Request, Response } from "express";

export const route = Router()

route.post('/file', async (req: Request, res: Response) => {
  await saveDataFromFile(req)

})