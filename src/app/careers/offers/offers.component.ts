import { IOffersInfo } from './../../shared/ioffers-info';
import { Component, OnInit } from '@angular/core';
import { CareersService } from './../../shared/careers.service'
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offerInfo: IOffersInfo[];
  constructor(private careersService: CareersService) {
  }


  isFirst(position: number): boolean {
    return position === 0 ;
  }
  isLast(position: number): boolean {
    return position === this.offerInfo.length - 1;
  }

  ngOnInit() {
     this.careersService
      .getCareers()
      .subscribe((data: any) => {
        const items = data.items;
        
        this.offerInfo = items.map(item => {
          const id = item.sys.id;
          const title = item.fields.title;
          const title2 = item.fields.title2;
          const description = item.fields.description;
          const requirements = item.fields.requirements;
          
          return {
            id,
            title,
            title2,
            description,
            requirements
          };
        });
      });
  }

}
