import { DeilouDungeonPage } from './app.po';

describe('deilou-dungeon App', () => {
  let page: DeilouDungeonPage;

  beforeEach(() => {
    page = new DeilouDungeonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
