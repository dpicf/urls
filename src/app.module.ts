import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { URL } from './urls/urls.model'
import { URLsModule } from './urls/urls.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env` }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      models: [URL],
      autoLoadModels: true,
    }),
    URLsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
