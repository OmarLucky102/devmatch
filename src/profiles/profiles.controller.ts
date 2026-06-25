import { Controller, Get, Query, Param } from '@nestjs/common';

//decorator higher order function
@Controller('profiles')
export class ProfilesController {
  //GET/profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }
  //GET/profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
