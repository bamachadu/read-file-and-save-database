import { SaveDataOfTheFileContract } from "src/data/contract";

export class SaveDataService {
  constructor(
    private repository: SaveDataOfTheFileContract
  ) { }

  async save(arr: string[], fileName: string): Promise<void> {
    let linesContent = []
    let line: number = 0

    for (let i of arr) {
      const transformArrayObjectContent = Object.assign({}, JSON.parse({ obj: ('["' + i + '"]').replace('\r', '') }.obj));

      linesContent.push(transformArrayObjectContent)
    }

    const props = linesContent.map(lineContent => ({
      content: lineContent,
      dateImport: new Date(),
      fileName,
      line: line++
    }))

    await this.repository.save(props)
  }
}