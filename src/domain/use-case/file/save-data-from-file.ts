export interface SaveDataFromFileUseCase {
  save: (params: SaveDataFromFileUseCase.Params) => Promise<void>
}

export namespace SaveDataFromFileUseCase {
  export type Params = {
    content?: string
    name?: string
    type: {
      description: string
      valid?: boolean
    }
  }
}

