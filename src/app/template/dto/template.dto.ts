import { ApiProperty } from '@nestjs/swagger';

export class TemplateDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updateAt: string;
}
