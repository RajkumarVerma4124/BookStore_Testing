import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickviewComponent } from './quickview.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('QuickviewComponent', () => {
  let component: QuickviewComponent;
  let fixture: ComponentFixture<QuickviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickviewComponent ],
      imports: [HttpClientModule, RouterTestingModule, MatSnackBarModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get single book based on id', () => {
    expect(component.getbook).toBeTruthy();
  });

  it('should add feedback of user', () => {
    expect(component.addFeedback).toBeTruthy();
  });

  it('should get all feedback of users', () => {
    expect(component.getAllFeedback).toBeTruthy();
  });

  it('should get shortname of users', () => {
    expect(component.getShortName).toBeTruthy();
  });

  it('should add the book to cart', () => {
    expect(component.addToCart).toBeTruthy();
  });

  it('should add the book to wishlist', () => {
    expect(component.addWishlist).toBeTruthy();
  });
});
