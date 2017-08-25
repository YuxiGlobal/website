import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerInfo = [
    {
      id: 1,
      title: 'discover real innovation',
      subtitle: 'Find out more about our software development services.',
      image: 'assets/images/DINAMIC_BANNERS_CELLPHONE.png'
    },
    {
      id: 2,
      title: 'explore inventive technologies',
      subtitle: 'see how our solutions can get you ahead of your competition',
      image: 'assets/images/DINAMIC_BANNERS_GOGGLES.png'
    },
    {
      id: 3,
      title: 'devise groundbreaking inprovements',
      subtitle: 'lear how your company can evolve via digital transformation',
      image: 'assets/images/DINAMIC_BANNERS_ROBOT.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
