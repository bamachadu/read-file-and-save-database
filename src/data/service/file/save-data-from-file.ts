
import { readFile } from "fs";
import { SaveDataFromFileUseCase } from "src/domain";
import { SaveDataService } from "./save-data";

const caminhoArquivos = 'C:/Users/bamac/Documents/Cursos/read-file-clean-architeture/files/test.txt'
export class SaveDataFromFileService implements SaveDataFromFileUseCase {
  constructor(
    private saveData: SaveDataService
  ) { }

  async save(params: SaveDataFromFileUseCase.Params): Promise<void> {
    await this.readTextFile(caminhoArquivos, this.saveData)
  }

  private async readTextFile(caminhoArquivos: string, sd: SaveDataService) {
    readFile(caminhoArquivos, async function (err, data) {
      if (err) throw err;
      const arr = data.toString().replace(/\t/g, ';').split('\n');
      await sd.save(arr)
    });
  }
}