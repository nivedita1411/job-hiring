import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobPosition } from 'src/models/job-position.model';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {

  constructor(private jb:JobService, private fb:FormBuilder) { }

  jobApplicationData : any
  jobPositions : JobPosition[] = []

  jobApplicationForm = this.fb.group({
    jobPositionId:['', Validators.required],
    applicantName : ['',Validators.required],
    // status : ['pending']
  })

  applyForJob()
  {

    if(this.jobApplicationData.valid)
    {
      this.jobApplicationData = this.jobApplicationForm.value
      // console.log(this.jobApplicationData)
      this.jb.applyForJob(this.jobApplicationData).subscribe(
        ()=> {
          alert('Applied!')
        }
      )
    }
    
  }

  ngOnInit(): void {

    this.jb.getJobPostings().subscribe((data:JobPosition[])=>{
      console.log(data)
      this.jobPositions.push(...data)
      // console.log(this.positions)
      console.log(this.jobPositions)
      

    })
  }

}
