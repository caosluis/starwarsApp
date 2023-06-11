import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestCrudPage } from './test-crud.page';

describe('TestCrudPage', () => {
  let component: TestCrudPage;
  let fixture: ComponentFixture<TestCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
