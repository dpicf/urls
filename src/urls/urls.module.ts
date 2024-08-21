import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { URL } from './urls.model'
import { URLsService } from './urls.service'
import { URLsController } from './urls.controller'

@Module({
  controllers: [URLsController],
  providers: [URLsService],
  imports: [SequelizeModule.forFeature([URL])],
})
export class URLsModule {}
