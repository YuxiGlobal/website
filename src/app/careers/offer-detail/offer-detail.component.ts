import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CareersService } from 'app/shared/careers.service'
import { IOffersInfo } from 'app/shared/ioffers-info';
import { NavigationService } from 'app/shared/services/navigation.service';
import { ShowOverlayService } from 'app/shared/services/show-overlay.service';
import { environment } from './../../../environments/environment';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { SubmissionsService } from 'app/shared/services/submissions.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  offerInfo: IOffersInfo;
  showOverlay = false;

  file;
  offerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    cv: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    offer: new FormControl('', [Validators.required])
  });
  recaptchaKey = environment.recapchaKey;
  recaptchaResponse: string;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.recaptchaResponse = captchaResponse;

  }

  getErrorMessage() {
    return this.offerForm.value.email.hasError('required') ? 'You must enter a value' :
      this.offerForm.value.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private careersService: CareersService,
    private showOverlayService: ShowOverlayService,
    private navigationService: NavigationService,
    private submissions: SubmissionsService
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((data: IOffersInfo) => this.careersService.getCareer(data.id))
    .subscribe((data: any) => {
      this.offerInfo = data.fields;
    });
  }

  openOverlay() {
    this.showOverlay = !this.showOverlay;
    this.showOverlayService.preventScroll = !this.showOverlayService.preventScroll;
  }

  closeOverlay() {
    this.showOverlay = false;
    this.showOverlayService.preventScroll = false;
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;

    if (fileList.length) {
      this.file = fileList[0];
    }
  }

  submitForm() {
    if (this.recaptchaResponse) {

      const data = {
        FullName: this.offerForm.value.name,
        Email: this.offerForm.value.email,
        Comments: this.offerForm.value.message,
        cv: this.file,
        website: this.offerForm.value.website,
        Phone: this.offerForm.value.phone,
        Offer: `${this.offerInfo.title} ${this.offerInfo.title2}`,
        'g-recaptcha-response': this.recaptchaResponse
      };

      this.submissions.sendOfferForm(data).subscribe(x => console.log(x));

    }
  }

}
