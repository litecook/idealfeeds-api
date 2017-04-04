import { IdealfeedsPage } from './app.po';

describe('idealfeeds App', () => {
  let page: IdealfeedsPage;

  beforeEach(() => {
    page = new IdealfeedsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
