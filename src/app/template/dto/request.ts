import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';
import { TemplateEntity } from '../../../database/models/template.entity';

export class CreateTemplateRequest {
  @Length(3)
  @ApiProperty()
  name: string;

  static toEntity(request: CreateTemplateRequest): TemplateEntity {
    const res = new TemplateEntity();
    res.name = request.name;
    return res;
  }
}
export class UpdateTemplateRequestDto {}
