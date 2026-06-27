import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';

//decorator higher order function
@Controller('profiles')
export class ProfilesController {
  //GET/profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }
  //GET/profiles/:id
  //Param is to grape the id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  //Create a data transfare object DTO what the data should look like
  @Post()
  create(@Body() CreateProfileDto: CreateProfileDto) {
    return {
      name: CreateProfileDto.name,
      description: CreateProfileDto.description,
    };
  }
}
