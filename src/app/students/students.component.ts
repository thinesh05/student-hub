import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  httpClient = inject(HttpClient);
  students: any = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.httpClient
    .get('http://127.0.0.1:8000/api/student')
    .subscribe((students: any)=>{
      this.students = students;
    })
  }
}
