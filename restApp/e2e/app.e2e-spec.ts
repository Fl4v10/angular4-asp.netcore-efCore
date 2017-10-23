import { RestAppPage } from './app.po';

describe('rest-app App', () => {
  let page: RestAppPage;

  beforeEach(() => {
    page = new RestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
