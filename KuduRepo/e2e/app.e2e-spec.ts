import { KuduRepoPage } from './app.po';

describe('kudu-repo App', function() {
  let page: KuduRepoPage;

  beforeEach(() => {
    page = new KuduRepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
