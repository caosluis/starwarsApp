import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListStarWarsFilmsPage } from './list-star-wars-films.page';

describe('ListStarWarsFilmsPage', () => {
  let component: ListStarWarsFilmsPage;
  let fixture: ComponentFixture<ListStarWarsFilmsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListStarWarsFilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
