import { Course } from './course';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-course-list',
    templateUrl: './app-course-list.component.html'
})

export class CourseListComponent implements OnInit{
  
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular Forms",
        imageUrl: './assets/images/forms.png',
        price: 100.00,
        code:  'XPS-8796',
        duration: 120,
        rating: 10.0,
        releaseDate: "10-02-2021"
      },

      {
        id: 2,
        name: "React Native",
        imageUrl: './assets/images/http.png',
        price: 150.00,
        code:  'XPS-8797',
        duration: 120,
        rating: 10.0,
        releaseDate: "12-03-2021"
      }
    ]  
  }


}
