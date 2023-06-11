import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateRegisterPage } from './update-register.page';

describe('UpdateRegisterPage', () => {
  let component: UpdateRegisterPage;
  let fixture: ComponentFixture<UpdateRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
