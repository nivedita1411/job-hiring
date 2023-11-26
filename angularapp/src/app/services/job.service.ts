import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { JobApplication } from 'src/models/job-application.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl : "https://8080-bacdcf307836433ebabcbbfabeeffone.premiumproject.examly.io/api/job"

  constructor(private httpclient: HttpClient) { }

  getJobPostings() : Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.apiUrl + '/positions')
  }
  getJobApplications() : Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.apiUrl + '/applications')
  }
  httpOptions : {headers: ({'Content-type':'application/json'})}
  createJobPosition(jobApplicationData : JobApplication) : Observable<any
  // getPositionTitles()
  
  applyForJob(jobApplicationData : JobApplication) : Observable<any>
  {
    return this.httpclient.
  }
  // updateApplicationStatus()
  // markJobAsClosed()
  // getTotalApplicantsByJobPositionId()
}
