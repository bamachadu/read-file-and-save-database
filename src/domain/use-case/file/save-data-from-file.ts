export interface SaveDataFromFileUseCase {
  save: (params: SaveDataFromFileUseCase.Params) => Promise<void>
}

export namespace SaveDataFromFileUseCase {
  export type Params = {
    content?: string
    name?: string
    path?: string
    type: {
      description: string
      valid?: boolean
    }
  }
}

