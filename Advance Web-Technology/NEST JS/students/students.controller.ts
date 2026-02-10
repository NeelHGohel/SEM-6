import {
  All,
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
  Header,
  Redirect,
  Param,
} from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return this.studentService.findOne(id);
  }

  @Post()
  insert() {
    return this.studentService.insert();
  }
  @Patch()
  update() {
    return this.studentService.update();
  }
  @Delete()
  delete() {
    return this.studentService.delete();
  }

  // @Get()
  // @Redirect('https://darshan.ac.in/', 302)
  // findAll(): string {
  //   return 'Hello world from the student with GET method with the code 204';
  // }

  // @Get(':id')
  // findOne(@Param() params: any): string {
  //   console.log(params.id);
  //   return `This is return student with the id ${params.id}`;
  // }

  // @Post()
  // @Header('Cache-Control', 'no-store')
  // insert(): string {
  //   return 'Hello world from the student with POST method';
  // }

  // @Patch()
  // update(): string {
  //   return 'Hello world from the student with PATCH method';
  // }
  // @Delete()
  // delete(): string {
  //   return 'Hello world from the student with DELETE method';
  // }

  // @All()
  // anyMethod() {
  //   return 'Hello world for the students with ANY method';
  // }
}
