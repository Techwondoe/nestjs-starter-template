import { ApiProperty } from '@nestjs/swagger';
import { TemplateEntity } from '../../../database/models/template.entity';

export class GetTemplateResponse {
  @ApiProperty()
  template: {
    id: number;
    name: string;
  };

  static toDto(entity: TemplateEntity): GetTemplateResponse {
    if (!entity) return null;
    const response = new GetTemplateResponse();
    response.template = {
      id: entity.id,
      name: entity.name,
    };
    return response;
  }
}
export class CreateTemplateResponse {
  @ApiProperty()
  id: number;
}
export class PutTemplateResponse {}
