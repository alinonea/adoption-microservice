import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdoptionService {
    constructor(private prisma: PrismaService) {}
    
    async updateAnimalAdoption(id: number) {
      return await this.prisma.animal.update({
        where: {id: id},
        data: {
          adopted: true,
          adoption_date: new Date()
        },
      })
    }
}
