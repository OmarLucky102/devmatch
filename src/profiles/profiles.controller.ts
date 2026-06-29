import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

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
  @Put()
  update(@Param('id') id: string, @Body() UpdateProfileDto: UpdateProfileDto) {
    return {
      id,
      ...UpdateProfileDto,
    };
  }
  //DELETE/Profile/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
