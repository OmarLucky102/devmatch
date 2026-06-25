import { Controller, Get, Query } from '@nestjs/common';

//decorator higher order function
@Controller('profiles')
export class ProfilesController {
  //GET/profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }
}
