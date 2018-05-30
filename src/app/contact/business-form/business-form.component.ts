import { environment } from './../../../environments/environment';
import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { SubmissionsService } from 'app/shared/services/submissions.service';
import { ICustomWindow, WindowRefService } from '../../services-page/window-ref.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent {
  @Input() showCaptcha: boolean;
  private _window: ICustomWindow;
  buttonTitle = 'Submit';

  businessForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    company: new FormControl(''),
    phone: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    message: new FormControl('')
  });

  recaptchaKey = environment.recapchaKey;
  recaptchaResponse: string;

  constructor(
    private windowRef: WindowRefService,
    private submissions: SubmissionsService
  ) { 
    this._window = windowRef.nativeWindow;    
  }

  resolved(captchaResponse: string) {
    this.recaptchaResponse = captchaResponse;
  }

  getErrorMessage() {
    return this.businessForm.value.email.hasError('required') ? 'You must enter a value' :
      this.businessForm.value.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  submitForm() {

    if (this.recaptchaResponse) {
      const data = {
        FullName: this.businessForm.value.name,
        Email: this.businessForm.value.email,
        Comments: this.businessForm.value.message,
        Country: this.businessForm.value.country,
        Company: this.businessForm.value.company,
        Phone: this.businessForm.value.phone,
        'g-recaptcha-response': this.recaptchaResponse
      };

      this.buttonTitle = 'Sending...';

      this.submissions
        .sendBusinessForm(data)
        .subscribe(
          () => {
            this._window.dataLayer.push({
              'event': 'registrationComplete'
             });
            this.buttonTitle = 'Sent!';
            
          },
          () => this.buttonTitle = 'Error. Please reload the page'
        );
    }
  }
}
