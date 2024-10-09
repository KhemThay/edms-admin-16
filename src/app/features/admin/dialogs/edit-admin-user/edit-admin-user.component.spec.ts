import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminUserComponent } from './edit-admin-user.component';

describe('EditAdminUserComponent', () => {
  let component: EditAdminUserComponent;
  let fixture: ComponentFixture<EditAdminUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminUserComponent]
    });
    fixture = TestBed.createComponent(EditAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
