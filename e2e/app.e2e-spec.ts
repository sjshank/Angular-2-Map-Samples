import { Angular2MapsSamplePage } from './app.po';

describe('angular2-maps-sample App', function() {
  let page: Angular2MapsSamplePage;

  beforeEach(() => {
    page = new Angular2MapsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
