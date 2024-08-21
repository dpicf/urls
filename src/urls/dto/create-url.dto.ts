import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsUrl } from 'class-validator'

export class CreateURLdto {
  @ApiProperty({
    example: 'https://hh.ru/resume/d000d2e4ff0d8d580c0039ed1f456a634d4245',
    description: 'ссылка',
  })
  @IsString()
  @IsUrl()
  url: string

  @ApiProperty({ example: 'моё резюме', description: 'название ссылки' })
  @IsString()
  name: string
}
