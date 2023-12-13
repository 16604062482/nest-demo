import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  // form urlencoded
  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }

  // query
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received:name = ${name},age = ${age}`;
  }

  // url param
  @Get(':id')
  urlParam(@Param('id') id: string) {
    debugger;
    return `received:id=${id}`;
  }
  // findOne(@Param('id') id: string) {
  //   return this.personService.findOne(+id);
  // }

  // @Post()
  // create(@Body() createPersonDto: CreatePersonDto) {
  //   return this.personService.create(createPersonDto);
  // }

  // @Get()
  // findAll() {
  //   return this.personService.findAll();
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
  //   return this.personService.update(+id, updatePersonDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personService.remove(+id);
  // }
}
