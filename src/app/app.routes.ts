import { Routes } from '@angular/router';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

export const routes: Routes = [
    { path: '', component: StudentsComponent },
    { path: 'details/:id', component: StudentDetailsComponent },
    { path: 'edit/:id', component: StudentsEditComponent }
];
