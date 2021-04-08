import { CourseService } from './course.service';
import { Course } from './course';
import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './app-course-list.component.html'
})

export class CourseListComponent implements OnInit{

  _filteredCourses: Course[] = [];

  _courses: Course[] = [];

  constructor(private courseService: CourseService){};


  _filterBy: string;

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this._filteredCourses = this._courses;

  }

  //Two-way databind
  //Colocando o valor
  set filter(value: string){
    this._filterBy = value;

    this._filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 );

  }

  //Pegando o valor
  get filter(){
    return this._filterBy;

  }



}