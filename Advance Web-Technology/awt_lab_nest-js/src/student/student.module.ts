import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}
}
