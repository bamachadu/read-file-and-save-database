
import { readFile } from "fs/promises";
import { SaveDataFromFileUseCase } from "src/domain";

export class SaveDataFromFileService implements SaveDataFromFileUseCase {
  constructor() { }

  async save(params: SaveDataFromFileUseCase.Params): Promise<void> {

  }
}