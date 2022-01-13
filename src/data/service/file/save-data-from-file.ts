
import { readFile } from "fs";
import { SaveDataFromFileUseCase } from "src/domain";
import { SaveDataService } from "./save-data";

export class SaveDataFromFileService implements SaveDataFromFileUseCase {
  constructor(
    private saveData: SaveDataService
  ) { }

  async save(params: SaveDataFromFileUseCase.Params): Promise<void> {

    if (params.path && params.name) {
      const pathFile = params.path! + params.name!
      await this.readTextFile(pathFile, this.saveData, params.name)
    }
  }

  private async readTextFile(pathFile: string, sd: SaveDataService, fileName: string) {
    readFile(pathFile, async function (err, data) {
      if (err) throw err;
      const arr = data.toString().replace(/\t/g, '","').split('\n');
      await sd.save(arr, fileName)
    });
  }
}