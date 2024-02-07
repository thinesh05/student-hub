import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../src/app/student';
import { StudentsEditComponent } from '../students-edit/students-edit.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule, StudentsEditComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})

export class StudentsComponent implements OnInit {
  httpClient = inject(HttpClient);
  students: any = [];
  student = new Student;

  ngOnInit(): void {
    this.fetchData();
  }

  // Action buttons
  showDetails(studentId: number): void {
    alert(`Showing details for student with ID ${studentId}`);
  }

  fetchData(){
    this.httpClient
    .get('http://127.0.0.1:8000/api/student')
    .subscribe((students: any)=>{
      this.students = students;
    })
  }

  insertStudent(){
    this.httpClient
    .post('http://127.0.0.1:8000/api/student', this.student)
    .subscribe(res => {
      if(res) {
        location.reload();
      }
    })
  }

  deleteStudent(studentId: number): void {
    this.httpClient
    .delete(`http://127.0.0.1:8000/api/student/${studentId}`)
    .subscribe(res => {
      if(res) {
        location.reload();
      }
    })
  }
}
