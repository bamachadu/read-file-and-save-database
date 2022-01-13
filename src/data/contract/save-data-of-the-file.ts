export interface SaveDataOfTheFileContract {
  save(params: SaveDataOfTheFileContract.Params[]): Promise<void>
}

export namespace SaveDataOfTheFileContract {
  export type Params = {
    content?: []
    fileName: string
  }
}