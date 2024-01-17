import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServidorService {
  constructor(private prisma: PrismaService) { }
  create(createServidorDto: CreateServidorDto) {
    return 'This action adds a new servidor';
  }

  async findAll(limite: number, pagina: number, busca: string) {
    limite = limite>0 ? limite : 10;
    pagina = pagina>0 ? pagina : 1;
    const total = await this.prisma.servidores.count();
    const servidores = await this.prisma.servidores.findMany({
      where: {
        nome: {
          contains: busca
        }
      },
      skip: (pagina-1)*limite, 
      take: limite
    });
    if (!servidores) throw new ForbiddenException("Erro ao buscar servidores!");
    return {
      data: servidores,
      total
    };
  }

  findOne(id: string) {''
    return `This action returns a #${id} servidor`;''
  }

  update(id: string, updateServidorDto: UpdateServidorDto) {
    return `This action updates a #${id} servidor`;
  }

  remove(id: string) {
    return `This action removes a #${id} servidor`;
  }
}
