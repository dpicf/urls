import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateURLdto } from './dto/create-url.dto'
import { URL } from './urls.model'
import { URLsService } from './urls.service'

@ApiTags('Ссылки')
@Controller('urls')
export class URLsController {
  constructor(private URLsService: URLsService) {}

  @ApiOperation({ summary: 'Создание ссылки' })
  @ApiResponse({ status: 201, type: URL })
  @Post()
  create(@Body() URLdto: CreateURLdto) {
    return this.URLsService.createURL(URLdto)
  }

  @ApiOperation({ summary: 'Получить все ссылки' })
  @ApiResponse({ status: 200, type: [URL] })
  @Get()
  getAll(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.URLsService.getAllURLs(limit, offset)
  }

  @ApiOperation({ summary: 'Получить ссылку по UUID' })
  @ApiResponse({ status: 200, type: URL })
  @Get(':uuid')
  getOne(@Param('uuid') uuid: string) {
    return this.URLsService.getURLByUUID(uuid)
  }

  @ApiOperation({ summary: 'Удалить ссылку по UUID' })
  @ApiResponse({ status: 200, type: URL })
  @Delete(':uuid')
  delete(@Param('uuid') uuid: string) {
    return this.URLsService.deleteURLByUUID(uuid)
  }
}
