import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateURLdto } from './dto/create-url.dto'
import { URL } from './urls.model'

@Injectable()
export class URLsService {
  constructor(@InjectModel(URL) private userRepository: typeof URL) {}

  async createURL(dto: CreateURLdto) {
    return await this.userRepository.create(dto)
  }

  async getAllURLs(limit: number, offset: number) {
    return await this.userRepository.findAll({ limit, offset })
  }

  async getURLByUUID(uuid: string) {
    const URL = await this.userRepository.findOne({ where: { uuid } })
    if (!URL) {
      throw new HttpException('Ссылка не найдена', HttpStatus.NOT_FOUND)
    }
    return URL
  }

  async deleteURLByUUID(uuid: string) {
    const URL = await this.userRepository.findOne({ where: { uuid } })
    if (!URL) {
      throw new HttpException('Ссылка не найдена', HttpStatus.NOT_FOUND)
    }
    await URL.destroy()
    return URL
  }
}
