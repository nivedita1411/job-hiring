import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {

  constructor(private jb:JobService, private fb:FormBuilder) { }

  

  ngOnInit(): void {
  }

}
