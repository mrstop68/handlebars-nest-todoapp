import { PartialType } from '@nestjs/mapped-types';
import { CreateAllsiteDto } from './create-allsite.dto';

export class UpdateAllsiteDto extends PartialType(CreateAllsiteDto) {}
