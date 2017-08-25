import { YuxiGlobalNewSitePage } from './app.po';

describe('yuxi-global-new-site App', () => {
  let page: YuxiGlobalNewSitePage;

  beforeEach(() => {
    page = new YuxiGlobalNewSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
