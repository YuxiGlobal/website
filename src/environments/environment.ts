// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  recapchaKey: '6LfV4TkUAAAAAJGi6IwWMG-P5VVfjdArdHzlGf4g',
  formUrls: {
    BUSINESS: 'https://yuxi-webapp-backend-qa.azurewebsites.net/contact/business',
    GENERAL: 'https://yuxi-webapp-backend-qa.azurewebsites.net/contact/general',
    OFFER: ' https://yuxi-webapp-backend-qa.azurewebsites.net/careers'
  }
};
