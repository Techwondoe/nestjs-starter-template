import { RepositoryProvider } from './../../common/enum/repository-provider';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { TemplateEntity } from '../../database/models/template.entity';
import { CreateTemplateRequest } from './dto/request';
import { CreateTemplateResponse, GetTemplateResponse } from './dto/response';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TemplateService {
  constructor(@InjectRepository(TemplateEntity) private templateRepository: Repository<TemplateEntity>) {}

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    const entity = CreateTemplateRequest.toEntity(request);
    const res = await this.templateRepository.save(entity);
    return { id: res.id };
  }

  async getTemplate(id: number): Promise<GetTemplateResponse> {
    const entity = await this.templateRepository.findOneBy({ id: id });
    return GetTemplateResponse.toDto(entity);
  }
}
