import { Column, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Sequelize } from 'sequelize'

@Table({ tableName: 'urls', updatedAt: false })
export class URL extends Model<URL> {
  @ApiProperty({
    example: '1fcd6c36-44dc-43c4-b23f-78bd06123262',
    description: 'Уникальный идентификатор',
  })
  @Column({
    type: 'UUID',
    defaultValue: Sequelize.literal('gen_random_uuid()'),
    primaryKey: true,
  })
  uuid: string

  @ApiProperty({
    example: 'https://hh.ru/resume/d000d2e4ff0d8d580c0039ed1f456a634d4245',
    description: 'ссылка',
  })
  @Column({ type: 'VARCHAR', allowNull: false })
  url: string

  @ApiProperty({ example: 'моё резюме', description: 'название ссылки' })
  @Column({ type: 'VARCHAR', allowNull: false })
  name: string

  @ApiProperty({
    example: '2024-08-21T17:53:53.195Z',
    description: 'дата создания',
  })
  @Column({ type: 'TIMESTAMPTZ', defaultValue: Sequelize.literal('now()') })
  createdAt: string
}
