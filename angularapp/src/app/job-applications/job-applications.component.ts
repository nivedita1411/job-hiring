import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {

  constructor(private jb:JobService, private fb:FormBuilder) { }

  jobApplicationData : any

  jobApplicationForm = this.fb.group({
    jobPositionId:['', Validators.required],
    applicantName : ['',Validators.required],
    status : ['pending']
  })

  applyForJob()
  {
    this.jobApplicationData = this.jobApplicationForm.value
    console.log(this.jobApplicationData)
    this.jb.applyForJob(this.jobApplicationData).subscribe(
      ()=> {
        
      }
    )
  }

  ngOnInit(): void {
  }

}
