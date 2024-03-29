import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-students-edit',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './students-edit.component.html',
  styleUrl: './students-edit.component.css'
})
export class StudentsEditComponent implements OnInit {
  httpClient = inject(HttpClient);
  router = inject(Router);
  studentId: any;
  data: any;
  student = new Student();

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.httpClient
    .get(`http://127.0.0.1:8000/api/student/${this.studentId}`)
    .subscribe((res)=>{
      // console.log(res)
      this.data = res;
      this.student = this.data
    })
  }

  updateStudent() {
    this.httpClient
    .put(`http://127.0.0.1:8000/api/student/${this.studentId}`, this.data)
    .subscribe(res => {
      this.router.navigate(['/']);
    })
  }
}
