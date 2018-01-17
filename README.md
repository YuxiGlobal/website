# YuxiGlobalNewSite


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.


## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Packages
* **ngx-fullpage:** 
 This package was used in home page to build the 
 vertical slider. It is just a Angular 2 directive wrapper for the fullpage.js library.

[ngx-fullpage](http://meiblorn.github.io/ngx-fullpage/)

* **Angular Material:** 
This one was used to create some elements in the website like Material tabs to organize content into separate views where only one view can be visible at a time, some buttons and icons.

* **ngx-carousel:**
Was used to create the horizontal slider/banner in Careers page.

## Architecture

The project has 6 modules, 4 of these are for each page (Home, Services, Careers and Contact), the Shared module is for shared components like, the footer, navbar, menu burger, get in touch, services and directives.

Each component has its own scss file, and inside the Styles folder are the global styles and variables.

In the Assets folder are the images, icons, fonts, and videos.

In the Locale folder are the translation files.

Internationalization(i18n) from Angular was used for the spanish translation.

The backend was developed using Node.js and is being deployed to Azure. It was created to send emails via contact/offer forms to the assigned areas.

_Contentful_ is content infrastructure, lets you create, manage and distribute content to any platform. It was used to manage and publish the latest offers in the company and manage the blog posts for hot stuff section.
