import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

import { JobApplication } from 'src/models/job-application.model';

@Component({
  selector: 'app-view-job-applications',
  templateUrl: './view-job-applications.component.html',
  styleUrls: ['./view-job-applications.component.css']
})
export class ViewJobApplicationsComponent implements OnInit {

  constructor(private jb:JobService) { }

  jobApplications : any[] = []
  loadJobApplications()
  {
    this.jb.getJobApplications().subscribe((data:JobApplication[])=>{
      this.jobApplications = data
    })
  }

  

  ngOnInit(): void {
  }

}
