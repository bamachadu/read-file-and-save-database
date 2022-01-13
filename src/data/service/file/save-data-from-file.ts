
import { readFile } from "fs";
import { SaveDataFromFileUseCase } from "src/domain";
import { SaveDataService } from "./save-data";

export class SaveDataFromFileService implements SaveDataFromFileUseCase {
  constructor(
    private saveData: SaveDataService
  ) { }

  async save(params: SaveDataFromFileUseCase.Params): Promise<void> {
    const pathFile: string = params.path! + params.name!
    const sd = this.saveData
    const fileName = params.name!

    readFile(pathFile, async function (err, data) {
      if (err) throw err;
      const arr = data.toString().replace(/\t/g, '","').split('\n');
      await sd.save(arr, fileName)
    });
  }
}