import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { JobApplication } from 'src/models/job-application.model';
import { JobPosition } from 'src/models/job-position.model';

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

  getPositionTitles() : Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.apiUrl + '/position_title')
  }
  httpOptions = {headers: new HttpHeaders ({'Content-type':'application/json'})}
  createJobPosition(newJobPosition:JobPosition) : Observable<any>
  {
    return this.httpclient.post<any>(this.apiUrl + '/position/add',newJobPosition,this.httpOptions)
  }
  
  
  applyForJob(jobApplicationData : JobApplication) : Observable<any>
  {
    return this.httpclient.post<any>(this.apiUrl + '/application/add', jobApplicationData, this.httpOptions)
  }
  updateApplicationStatus(applicationId:number, applicantName:string,newStatus:string): Observable<any>
  {
    return this.httpclient.put<any>(this.apiUrl + '/application/update/' + applicationId,this.httpOptions)
  }
  // markJobAsClosed()
  // getTotalApplicantsByJobPositionId()
}
