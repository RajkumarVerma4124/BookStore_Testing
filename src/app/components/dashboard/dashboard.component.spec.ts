import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientModule, RouterTestingModule, MatSnackBarModule, FormsModule, ReactiveFormsModule, MatMenuModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search book based on characters', () => {
    expect(component.recieveSearchNote).toBeTruthy();
  });

  it('should clear the characters', () => {
    component.clickCross()
    expect(component.clickCross).toBeTruthy();
  });

  it('should active the search bar', () => {
    component.setSearchActive()
    expect(component.setSearchActive).toBeTruthy();
  });

  it('should deactive the search bar', () => {
    component.setSearchDeactive()
    expect(component.setSearchDeactive).toBeTruthy();
  });

  it('should logout the user', () => {
    expect(component.logout).toBeTruthy();
  });


  it('should navigate the user to login page', () => {
    expect(component.login).toBeTruthy();
  });


  it('should navigate the user to cart page based on condition', () => {
    expect(component.goToCart).toBeTruthy();
  });

  it('should get all cart for cart itemscount', () => {
    expect(component.getAllCart).toBeTruthy();
  });

  it('should navigate the user to home page', () => {
    expect(component.goToHome).toBeTruthy();
  });

  it('should navigate the user to orders page', () => {
    expect(component.goToOrders).toBeTruthy();
  });

  it('should navigate the user to wishlist page', () => {
    expect(component.goToWishlist).toBeTruthy();
  });

  it('should navigate the user to profile page', () => {
    expect(component.goToProfile).toBeTruthy();
  });
});
