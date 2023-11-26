import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-posting-form',
  templateUrl: './job-posting-form.component.html',
  styleUrls: ['./job-posting-form.component.css']
})
export class JobPostingFormComponent implements OnInit {

  

  constructor(private jb : JobService, private fb : FormBuilder) { }

  jobPosting: any

  jobPostingForm = this.fb.group({
    title : ['',Validators.required],
    department: ['',Validators.required],
    location : ['',Validators.required],
    responsibilities : ['',Validators.required],
    qualifications:['',Validators.required],
    applicationDeadline:['',Validators.required]
  })

  submitJobPosting(){
    this.jobPosting = this.jobPostingForm.value
    console.log(this.jobPosting)
    this.jb.createJobPosition(this.jobPosting).subscribe(
      ()=> {
        // this.router.navigate(['/'])
      }
    )
  }


  ngOnInit(): void {
  }

}
