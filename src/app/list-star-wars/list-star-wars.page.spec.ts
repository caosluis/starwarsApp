import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListStarWarsPage } from './list-star-wars.page';

describe('ListStarWarsPage', () => {
  let component: ListStarWarsPage;
  let fixture: ComponentFixture<ListStarWarsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListStarWarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
