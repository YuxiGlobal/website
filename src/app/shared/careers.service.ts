import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { IOffersInfo } from 'app/shared/ioffers-info';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const CONTENTFUL_API = 'https://cdn.contentful.com/spaces/x3r1tbrol9cy';
const ACCESS_TOKEN = '?access_token=d2e70c94ca95cab9905d91458f3f2946bf51dbc3d9e170b4a01e44aec514ad81';
const CAREERS_URL = `${CONTENTFUL_API}/entries${ACCESS_TOKEN}`;
const CAREER_URL = jobId => `${CONTENTFUL_API}/entries/${jobId}/${ACCESS_TOKEN}`;

@Injectable()
export class CareersService {

  constructor(private http: HttpClient) { }

  getCareers(): Observable<IOffersInfo[]> {
    return this.http
    .get(CAREERS_URL)
    // TODO fix this type
    .map((response: any) => {
      return response;
    })
  }

  getCareer(id): Observable<IOffersInfo[]> {
    return this.http
    .get(CAREER_URL(id))
    // TODO fix this type
    .map((response: any) => {
      return response;
    });
  }
}
