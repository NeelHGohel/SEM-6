import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {

  findAll() {
    return 'Hello World from findAll method';
  }

  findOne(id: number) {
    return `Hello World from findOne Method with id ${id}`;
  }

  insert() {
    return 'Hello World from insert method';
  }
  update() {
    return 'Hello World from update method';
  }
  delete() {
    return 'Hello World from delete method';
  }
}
