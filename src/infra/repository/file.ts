import { PrismaClient } from '@prisma/client'
import { SaveDataOfTheFileContract } from 'src/data'

const prisma = new PrismaClient()

export class FileRepository implements  SaveDataOfTheFileContract {
  async save(params: SaveDataOfTheFileContract.Params): Promise<void> {

    await prisma.fileProps.createMany({
      data: params
    })
  }
}