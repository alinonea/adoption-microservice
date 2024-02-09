import { Controller } from "@nestjs/common";
import { AdoptionService } from "./adoption.service";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class AdoptionController {
    constructor(private adoptionService: AdoptionService){}

    @EventPattern("adopt_animal")
    async handlerAnimalAdoption(animalId: number){
        const res = this.adoptionService.updateAnimalAdoption(Number(animalId))
        console.log(res)
    }

}