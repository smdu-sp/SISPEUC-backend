import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ServidorService } from './servidor.service';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';

@Controller('servidor')
export class ServidorController {
  constructor(private readonly servidorService: ServidorService) {}

  @Post()
  create(@Body() createServidorDto: CreateServidorDto) {
    return this.servidorService.create(createServidorDto);
  }

  @Get('')
  findAll(
    @Query('pagina') pagina: number = 1,
    @Query('limite') limite: number = 10,
    @Query('busca') busca
  ) {
    return this.servidorService.findAll(+limite, +pagina, busca);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servidorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServidorDto: UpdateServidorDto) {
    return this.servidorService.update(id, updateServidorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servidorService.remove(id);
  }
}
