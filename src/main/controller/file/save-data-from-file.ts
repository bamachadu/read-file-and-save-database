import { FileRepository } from '../../../infra/repository';
import { SaveDataFromFileService, SaveDataService } from '../../../data/service';
import { SaveDataFromFilePresentation } from '../../../presentation/controller'

export const saveDataFromFile = async (req: any) => {
  const repository = new FileRepository()
  const saveData = new SaveDataService(repository)
  const service = new SaveDataFromFileService(saveData)
  const controller = new SaveDataFromFilePresentation(service)

  return controller.handle(req)
}