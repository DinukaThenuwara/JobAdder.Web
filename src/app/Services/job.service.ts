import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(protected http: HttpClient) { }

  getAllJobs(){
        const url = 'https://localhost:44324/api/job/getall';
        return this.http.get<any>(url);
  }
}
