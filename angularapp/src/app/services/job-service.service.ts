import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private httpclient: HttpClient) { }

  getJobPostings() : Observable<any[]
}