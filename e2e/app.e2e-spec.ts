import { YouerPage } from './app.po';

describe('youer App', () => {
  let page: YouerPage;

  beforeEach(() => {
    page = new YouerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
