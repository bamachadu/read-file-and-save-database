export interface SaveDataOfTheFileContract {
  save(params: SaveDataOfTheFileContract.Params): Promise<void>
}

export namespace SaveDataOfTheFileContract {
  export type Params = {
    fileName: string
    content01?: string | null
    content02?: string | null
    content03?: string | null
    content04?: string | null
    content05?: string | null
    content06?: string | null
    content07?: string | null
    content08?: string | null
    content09?: string | null
    content10?: string | null
  }
}