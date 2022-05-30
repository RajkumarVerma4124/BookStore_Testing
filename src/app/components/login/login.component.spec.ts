import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule, RouterTestingModule, MatSnackBarModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate the user to register page', () => {
    expect(component.register).toBeTruthy();
  });

  it('should navigate the user to login page', () => {
    expect(component.login).toBeTruthy();
  });

  it('should navigate the user to forgotpassword page', () => {
    expect(component.forgotpassword).toBeTruthy();
  });

  it('should login and navigate to home page', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  it('should login the admin', () => {
    expect(component.admin).toBeTruthy();
  });

  it('should login the user', () => {
    expect(component.userReg).toBeTruthy();
  });
});
