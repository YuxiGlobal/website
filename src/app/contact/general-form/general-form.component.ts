import { environment } from './../../../environments/environment';
import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { SubmissionsService } from 'app/shared/services/submissions.service';
@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent {
  @Input() isSelected: boolean;

  generalForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
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
    return this.generalForm.value.email.hasError('required') ? 'You must enter a value' :
      this.generalForm.value.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  constructor(
    private submissions: SubmissionsService
  ) { }

  submitForm() {
    console.log('TEST');

    if (this.recaptchaResponse) {
      console.log('TEST 2');

      const data = {
        FullName: this.generalForm.value.name,
        Email: this.generalForm.value.email,
        Comments: this.generalForm.value.message,
        Country: this.generalForm.value.country,
        'g-recaptcha-response': this.recaptchaResponse
      };

      this.submissions.sendGeneralForm(data).subscribe(x => console.log(x));

    }
  }

}
