import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentRepo.save(createStudentDto);
  }

  findAll() {
    return this.studentRepo.find();
  }

  findOne(id: number) {
    return this.studentRepo.findOneBy({ id });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentRepo.update(id, updateStudentDto);
  }

  remove(id: number) {
    return this.studentRepo.delete(id);
  }
}
