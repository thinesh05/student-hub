import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule],
  providers: [DatePipe],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  httpClient = inject(HttpClient);
  router = inject(Router);
  datePipe = inject(DatePipe)
  studentId: any;
  data: any;
  formattedCreatedDateTime: any;
  formattedUpdatedDateTime: any;
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
      this.student.formattedCreatedDateTime = this.datePipe.transform(this.data.created_at, 'medium');
      this.student.formattedUpdatedDateTime = this.datePipe.transform(this.data.updated_at, 'medium');
    })
  }
}
