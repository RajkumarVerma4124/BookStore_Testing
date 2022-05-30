import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [HttpClientModule, RouterTestingModule, MatSnackBarModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show and hide the addresslist', () => {
    expect(component.addressShowHide).toBeTruthy();
  });

  it('should add the new address by refreshing the form', () => {
    expect(component.addNewAddress).toBeTruthy();
  });

  it('should update the type of address', () => {
    expect(component.updateAddressType).toBeTruthy();
  });

  it('should add the type of address', () => {
    expect(component.addressTypevalue).toBeTruthy();
  });

  it('should differente between update and add address', () => {
    expect(component.editAddress).toBeTruthy();
  });

  it('should update or add address based on condition', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  it('should get single address based on id', () => {
    expect(component.getAddressById).toBeTruthy();
  });

  it('should delete single address based on id', () => {
    expect(component.deleteAddressById).toBeTruthy();
  });

  it('should get all address details of a user', () => {
    expect(component.getAllAddress).toBeTruthy();
  });
});
