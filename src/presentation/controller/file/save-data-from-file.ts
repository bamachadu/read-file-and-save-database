import { SaveDataFromFileService } from "src/data"
import { Controller, HttpRequest, HttpResponse, noContent, serverError } from '../../'

export class SaveDataFromFilePresentation implements Controller {
  constructor(
    private readonly service: SaveDataFromFileService
  ) { }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const params = {
        type: {
          description: req.body.descriptionFile
        },
      }
      
      await this.service.save(params)
      return noContent()

    } catch (error: any) {
      return serverError(error)
    }
  }
}