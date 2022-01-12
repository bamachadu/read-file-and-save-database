export class SaveDataService {
  constructor() { }

  async save(arr: string[]): Promise<void> {
    console.log(9)
    console.log(arr)

    let f = []

    for (let i of arr) {
      const ini3 = '["' + i + '"]'
      const ini4 = { obj: ini3.replace('\r', '') }

      const a = Object.assign({}, JSON.parse(ini4.obj));

      f.push(a)
    }

    console.log('f', f)

  }
}