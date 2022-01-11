import { SaveDataFromFileService } from '../../../data/service';
import { SaveDataFromFilePresentation } from '../../../presentation/controller'

export const saveDataFromFile = async (req: any) => {
  const service = new SaveDataFromFileService()
  const controller = new SaveDataFromFilePresentation(service)

  return controller.handle(req)
}