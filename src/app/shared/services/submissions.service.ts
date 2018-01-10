import { FormsUrls } from './../../config';
import { Injectable, Inject } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// const BUSINESS_FORM_URL = 'http://localhost:3000/contact/business';
// const GENERAL_FORM_URL = 'http://localhost:3000/contact/general';
// const OFFER_FORM_URL = 'http://localhost:3000/careers';

@Injectable()
export class SubmissionsService {
  formConfig;

  constructor(
    @Inject(FormsUrls) config,
    private http: HttpClient
  ) {
    this.formConfig = config;
  }

  // TODO: Add types
  sendBusinessForm(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'form-data' });
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log(data);

    const formData: FormData = new FormData();
    formData.append('FullName', data.FullName);
    formData.append('Company', data.Company);
    formData.append('Email', data.Email);
    formData.append('Country', data.Country);
    formData.append('Phone', data.Phone);
    formData.append('g-recaptcha-response', data['g-recaptcha-response']);
    formData.append('Comments', data.Comments);
    return this.http
      .post(
      this.formConfig.formUrls.BUSINESS, //BUSINESS_FORM_URL,
      formData
      )
      .map((response: Response) => {
        return response;
      });
  }

  sendGeneralForm(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'form-data' });
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log(data);

    const formData: FormData = new FormData();
    formData.append('FullName', data.FullName);
    formData.append('Email', data.Email);
    formData.append('Country', data.Country);
    formData.append('Comments', data.Comments);
    formData.append('g-recaptcha-response', data['g-recaptcha-response']);
    return this.http
      .post(
        this.formConfig.formUrls.GENERAL,
      formData
      )
      .map((response: Response) => {
        return response;
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
    formData.append('Website', data.Website);
    formData.append('file', data.cv, data.cv.name);
    formData.append('Comments', data.Comments);
    formData.append('Offer', data.Offer);
    formData.append('g-recaptcha-response', data['g-recaptcha-response']);
    return this.http
      .post(
        this.formConfig.formUrls.OFFER,
        formData
      )
      .map((response: Response) => {
        return response;
      });
  }
}
