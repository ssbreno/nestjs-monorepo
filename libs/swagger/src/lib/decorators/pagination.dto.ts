import { ApiProperty } from '@nestjs/swagger';

export class PageDto {
  @ApiProperty({
    description: 'Total number of items',
  })
  total!: number;

  @ApiProperty({
    description: 'Current page number',
  })
  page!: number;

  @ApiProperty({
    description: 'Number of items per page',
  })
  pageSize!: number;

  @ApiProperty({
    description: 'Total number of pages',
  })
  totalPages!: number;
}
