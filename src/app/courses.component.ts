import { Component } from '@angular/core';
//import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan">Hi!</td>
            </tr>
        </table>
        <button class="btn btn-primary" [class.active]="isActive">SAVE</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'green'">LULZ</button>
        <button 
    `
})
export class CoursesComponent {
    colSpan = 2;
    isActive = false;

    /* title = "such fucking title dude";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    calculate() {
        return this.courses.length;
    } */
}