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
      image: 'assets/images/DINAMIC_BANNERS_CELLPHONE.png',
      video: 'http://img.freepik.com/free-vector/background-with-abstract-shapes_1128-339.jpg?size=338&ext=jpg'
    },
    {
      id: 2,
      title: 'explore inventive technologies',
      subtitle: 'see how our solutions can get you ahead of your competition',
      image: 'assets/images/DINAMIC_BANNERS_GOGGLES.png',
      video: 'https://thumb1.shutterstock.com/display_pic_with_logo/4295143/603333428/stock-vector-vector-realistic-basketball-ball-isolated-on-transparent-background-603333428.jpg'
    },
    {
      id: 3,
      title: 'devise groundbreaking inprovements',
      subtitle: 'lear how your company can evolve via digital transformation',
      image: 'assets/images/DINAMIC_BANNERS_ROBOT.png',
      video:'https://thumb1.shutterstock.com/display_pic_with_logo/4295143/603333428/stock-vector-vector-realistic-basketball-ball-isolated-on-transparent-background-603333428.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
