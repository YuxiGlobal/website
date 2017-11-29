import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const BUSINESS_FORM_URL = 'http://yuxi-webapp-backend-qa.azurewebsites.net/contact/business';

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
  
    let formData:FormData = new FormData();  
    formData.append('Email',data.Email);  
    formData.append('g-recaptcha-response', data['g-recaptcha-response']);  


    // let params = new URLSearchParams;
    // params.append('Email', data.Email);
    // params.append('g-recaptcha-response', data['g-recaptcha-response']);
  //  return this.authHttp.post( url,  { headers:headers,  search:params })
  // .map(
  //             res => {
  //                 let newReview = res.json();
  //                 this.reviews.push(newReview);
  //                 console.log(this.reviews);
  //                 return newReview;
  //             }
  //         );


    return this.http
      .post(
        BUSINESS_FORM_URL,
        formData
        // data,
        // options
      )
      .map((response: Response) => {
        return response.json();
      });
  }

}
