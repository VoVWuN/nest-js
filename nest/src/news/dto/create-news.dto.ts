import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString({
    message: 'Поле должно быть строкой',
  })
  @IsNotEmpty()
  description: string;

  @IsString()
  @ValidateIf((o) => o.author)
  author: string;

  @IsNumber()
  @IsOptional()
  countViews: number;

  @IsString()
  @ValidateIf((o) => o.cover)
  cover: string;

  // @IsDateString()
  // @IsOptional()
  // createAt: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}