import { SaveDataOfTheFileContract } from "src/data/contract";

export class SaveDataService {
  constructor(
    private repository: SaveDataOfTheFileContract
  ) { }

  async save(arr: string[], fileName:  string): Promise<void> {
    let f = []

    for (let i of arr) {
      const ini3 = '["' + i + '"]'
      const ini4 = { obj: ini3.replace('\r', '') }

      const a = Object.assign({}, JSON.parse(ini4.obj));

      f.push(a)
    }

    const props = {
      fileName: fileName
    }

    await this.repository.save(props)
    console.log('f', f)

  }
}