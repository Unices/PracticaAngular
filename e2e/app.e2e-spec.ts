import { AppComprasPage } from './app.po';

describe('app-compras App', () => {
  let page: AppComprasPage;

  beforeEach(() => {
    page = new AppComprasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
