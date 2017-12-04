import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const BUSINESS_FORM_URL = 'http://yuxi-webapp-backend-qa.azurewebsites.net/contact/business';
const GENERAL_FORM_URL = 'http://yuxi-webapp-backend-qa.azurewebsites.net/contact/general';
const OFFER_FORM_URL = 'http://localhost:3000/careers';

@Injectable()
export class SubmissionsService {

  constructor(private http: Http) { }

  // TODO: Add types
  sendBusinessForm(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'form-data' });
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log(data);

    const formData: FormData = new FormData();
    formData.append('FullName', data.FullName);
    formData.append('Email', data.Email);
    formData.append('Country', data.Country);
    formData.append('g-recaptcha-response', data['g-recaptcha-response']);

    return this.http
      .post(
      BUSINESS_FORM_URL,
      formData
      )
      .map((response: Response) => {
        return response.json();
      });
  }

  sendGeneralForm(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'form-data' });
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log(data);

    const formData: FormData = new FormData();
    formData.append('Email', data.Email);
    formData.append('g-recaptcha-response', data['g-recaptcha-response']);

    return this.http
      .post(
      GENERAL_FORM_URL,
      formData
      )
      .map((response: Response) => {
        return response.json();
      });
  }

  sendOfferForm(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'form-data' });
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log(data);

    const formData: FormData = new FormData();
    formData.append('FullName', data.FullName);
    formData.append('Email', data.Email);
    formData.append('Phone', data.Phone);
    formData.append('website', data.website);
    formData.append('file', data.cv, 'Hoja de vida');
    formData.append('Comments', data.Comments);
    formData.append('g-recaptcha-response', data['g-recaptcha-response']);

    return this.http
      .post(
        OFFER_FORM_URL,
        formData
      )
      .map((response: Response) => {
        return response.json();
      });
  }
}
