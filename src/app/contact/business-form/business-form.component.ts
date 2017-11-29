import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { SubmissionsService } from 'app/shared/services/submissions.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  company = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  country = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(
    private submissions: SubmissionsService
  ) { }

  ngOnInit() {
  }

  submitForm() {
    const data = {
      FullName: this.name.value,
      Email: this.email.value,
      Comments: this.message.value,
      Country: this.country.value,
      Company: this.company.value,
      Phone: this.phone.value
    };

    this.submissions.sendBusinessForm(data).subscribe(console.log);
  }

}
