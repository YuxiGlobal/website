import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        image: false,
        width: '1000px',
        height: '1000px',
        thumbnailsColumns: 3,
        thumbnailsRows: 3,
        thumbnailMargin: 0,
        thumbnailsMargin: 0,
        thumbnailsPercent: 20,
        previewKeyboardNavigation: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        arrowPrevIcon: "fa fa-chevron-circle-left",
        arrowNextIcon: "fa fa-chevron-circle-right",
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '100vw',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 0,
        thumbnailMargin: 0
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery1.jpg',
        medium: 'assets/images/gallery1.jpg',
        big: 'assets/images/gallery1.jpg'
      },
      {
        small: 'assets/images/gallery2.jpg',
        medium: 'assets/images/gallery2.jpg',
        big: 'assets/images/gallery2.jpg'
      },
      {
        small: 'assets/images/gallery3.jpg',
        medium: 'assets/images/gallery3.jpg',
        big: 'assets/images/gallery3.jpg'
      },
      {
        small: 'assets/images/gallery4.jpg',
        medium: 'assets/images/gallery4.jpg',
        big: 'assets/images/gallery4.jpg'
      },
      {
        small: 'assets/images/gallery5.jpg',
        medium: 'assets/images/gallery5.jpg',
        big: 'assets/images/gallery5.jpg'
      },
      {
        small: 'assets/images/gallery6.jpg',
        medium: 'assets/images/gallery6.jpg',
        big: 'assets/images/gallery6.jpg'
      },
      {
        small: 'assets/images/gallery7.jpg',
        medium: 'assets/images/gallery7.jpg',
        big: 'assets/images/gallery7.jpg'
      },
      {
        small: 'assets/images/gallery8.jpeg',
        medium: 'assets/images/gallery8.jpeg',
        big: 'assets/images/gallery8.jpeg'
      },
      {
        small: 'assets/images/gallery10.jpg',
        medium: 'assets/images/gallery10.jpg',
        big: 'assets/images/gallery10.jpg'
      }
    ];
  }

}
