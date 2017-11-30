import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { SubmissionsService } from 'app/shared/services/submissions.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent implements OnInit {
  businessForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  recaptchaKey = environment.recapchaKey;
  recaptchaResponse: string;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.recaptchaResponse = captchaResponse;

  }

  getErrorMessage() {
    return this.businessForm.value.email.hasError('required') ? 'You must enter a value' :
      this.businessForm.value.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(
    private submissions: SubmissionsService
  ) { }

  ngOnInit() {
  }

  submitForm() {
    console.log('TEST');

    if (this.recaptchaResponse) {
      console.log('TEST 2');

      const data = {
        FullName: this.businessForm.value.name,
        Email: this.businessForm.value.email,
        Comments: this.businessForm.value.message,
        Country: this.businessForm.value.country,
        Company: this.businessForm.value.company,
        Phone: this.businessForm.value.phone,
        'g-recaptcha-response': this.recaptchaResponse
      };

      this.submissions.sendBusinessForm(data).subscribe(x => console.log(x));

    }
  }
}
