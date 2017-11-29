import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const BUSINESS_FORM_URL = 'http://yuxi-webapp-backend.azurewebsites.net/contact/business';

@Injectable()
export class SubmissionsService {

  constructor(private http: Http) { }

  // TODO: Add types
  sendBusinessForm(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'multipart/form-data');

    return this.http
      .post(
        BUSINESS_FORM_URL,
        JSON.stringify(data),
        options
      )
      .map((response: Response) => {
        return response.json();
      });
  }

}
