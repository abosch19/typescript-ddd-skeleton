import { Given } from 'cucumber';
import container from '../../../../../../src/apps/backoffice/backend/config/dependency-injection';
import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseName } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';
import { CourseId } from '../../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';

const courseRepository: CourseRepository = container.get('Backoffice.courses.BackofficeCourseRepository');

Given('there is the course:', async (course: any) => {
  const { id, name, duration } = JSON.parse(course);
  await courseRepository.save(new Course(new CourseId(id), new CourseName(name), new CourseDuration(duration)));
});
