import { SaveDataFromFileService, SaveDataService } from '../../../data/service';
import { SaveDataFromFilePresentation } from '../../../presentation/controller'

export const saveDataFromFile = async (req: any) => {
  const saveData = new SaveDataService()
  const service = new SaveDataFromFileService(saveData)
  const controller = new SaveDataFromFilePresentation(service)

  return controller.handle(req)
}