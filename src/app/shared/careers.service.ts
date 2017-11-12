import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IOffersInfo } from 'app/shared/ioffers-info';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const CONTENTFUL_API = 'https://cdn.contentful.com/spaces/0mhvte2or8yk';
const ACCESS_TOKEN = '?access_token=e50872701dd8b070ace6ce3e8beaa69e3ae8f1f1e473a1632c5ed296280ff9c8';
const CAREERS_URL = `${CONTENTFUL_API}/entries${ACCESS_TOKEN}`;
const CAREER_URL = jobId => `${CONTENTFUL_API}/entries/${jobId}/${ACCESS_TOKEN}`;

@Injectable()
export class CareersService {

  constructor(private http: Http) { }

  getCareers(): Observable<IOffersInfo[]> {
    return this.http
    .get(CAREERS_URL)
    .map((response: Response) => {
      return response.json();
    });
  }

  getCareer(id): Observable<IOffersInfo[]> {
    return this.http
    .get(CAREER_URL(id))
    .map((response: Response) => {
      return response.json();
    });
  }
}
