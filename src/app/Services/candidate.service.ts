import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  constructor(protected http: HttpClient) {}

  getMostSuitableCandidate(request?: any) {
    const url = '/api/candidate/bestcandidate';
    return this.http.post<any>(url, request);
  }
}
