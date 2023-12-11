import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) { }
  @Post()
  async create(@Body() data) {
    return await this.catService.save(data);
  }

  @Get()
  async find() {
    return await this.catService.find();
  }
}
