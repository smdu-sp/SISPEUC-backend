import { PartialType } from '@nestjs/mapped-types';
import { CreateServidorDto } from './create-servidor.dto';

export class UpdateServidorDto extends PartialType(CreateServidorDto) {}
