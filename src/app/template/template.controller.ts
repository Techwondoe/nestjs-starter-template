import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTemplateRequest } from './dto/request';
import { CreateTemplateResponse, GetTemplateResponse } from './dto/response';
import { TemplateService } from './template.service';

@Controller('template')
@ApiTags('template')
export class TemplateController {
  constructor(private service: TemplateService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'The created record',
    type: CreateTemplateResponse,
  })
  async create(@Body() request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    const response = await this.service.createTemplate(request);
    return response;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: GetTemplateResponse,
  })
  async getTemplate(@Param('id') id: number): Promise<GetTemplateResponse> {
    const response = await this.service.getTemplate(id);
    return response;
  }
}
