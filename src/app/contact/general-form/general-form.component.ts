import { environment } from './../../../environments/environment';
import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { SubmissionsService } from 'app/shared/services/submissions.service';
import { ICustomWindow, WindowRefService } from '../../services-page/window-ref.service';


@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent {
  @Input() showCaptcha: boolean;
  private _window: ICustomWindow;

  buttonTitle = 'Submit';

  generalForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
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
    return this.generalForm.value.email.hasError('required') ? 'You must enter a value' :
      this.generalForm.value.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  submitForm() {
    if (this.recaptchaResponse) {

      const data = {
        FullName: this.generalForm.value.name,
        Email: this.generalForm.value.email,
        Comments: this.generalForm.value.message,
        Country: this.generalForm.value.country,
        'g-recaptcha-response': this.recaptchaResponse
      };
      this.buttonTitle = 'Sending...';

      this.submissions
        .sendGeneralForm(data)
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
