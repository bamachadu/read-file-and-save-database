import { SaveDataFromFileUseCase } from "src/domain"

export interface SaveDataOfTheFileContract {
  save(params: SaveDataOfTheFileContract.Params[]): Promise<void>
}

export namespace SaveDataOfTheFileContract {
  export type Params = {
    content?: []
    dateImport: Date
    fileName: string
    line: number
  }
}