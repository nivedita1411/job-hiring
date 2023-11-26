import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-posting-form',
  templateUrl: './job-posting-form.component.html',
  styleUrls: ['./job-posting-form.component.css']
})
export class JobPostingFormComponent implements OnInit {

  formData: any

  constructor(private jb : JobService, private fb : FormBuilder, private router = Router) { }

  createForm = this.fb.group({
    title : [''],
    department: [''],
    location : [''],
    responsibilities : [''],
    qualifications:[''],
    applicationDeadline:['']
  })

  submitJobPosting(){
    this.formData = this.createForm.value
    console.log(this.formData)
    this.jb.createJobPosition(this.formData).subscribe(
      ()=> {
        // this.router.navigate(['/'])
      }
    )
  }


  ngOnInit(): void {
  }

}
