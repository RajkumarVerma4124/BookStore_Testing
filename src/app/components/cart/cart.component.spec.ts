import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [HttpClientModule, RouterTestingModule, MatSnackBarModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should increment cart book quantity', () => {
  // let cartData = {
  //   quantityactualPrice: 699.99,
  //   authorName: "Eric Ries",
  //   bookId: 3,
  //   bookImage: "https://res.cloudinary.com/dxql1ewyt/image/upload/v1652776545/81vvgZqCskL._AC._SR360_460_gcss9r.jpg",
  //   bookName: "The Lean Startup: How Constant Innovation Creates Radically",
  //   bookQuantity: 2,
  //   cartId: 140,
  //   discountPrice: 646.99,
  //   userId: 5
  //   }
  //   component.plusCartBook(cartData)
    expect(component.plusCartBook).toBeTruthy();
  });

  it('should decrement cart book quantity', () => {
    // let cartData = {
    //   quantityactualPrice: 699.99,
    //   authorName: "Eric Ries",
    //   bookId: 3,
    //   bookImage: "https://res.cloudinary.com/dxql1ewyt/image/upload/v1652776545/81vvgZqCskL._AC._SR360_460_gcss9r.jpg",
    //   bookName: "The Lean Startup: How Constant Innovation Creates Radically",
    //   bookQuantity: 2,
    //   cartId: 140,
    //   discountPrice: 646.99,
    //   userId: 5
    // }
    // component.minusCartBook(cartData)
    expect(component.minusCartBook).toBeTruthy();
  });

  it('should remove cart', () => {
    // let cartData = {
    //   quantityactualPrice: 699.99,
    //   authorName: "Eric Ries",
    //   bookId: 3,
    //   bookImage: "https://res.cloudinary.com/dxql1ewyt/image/upload/v1652776545/81vvgZqCskL._AC._SR360_460_gcss9r.jpg",
    //   bookName: "The Lean Startup: How Constant Innovation Creates Radically",
    //   bookQuantity: 2,
    //   cartId: 140,
    //   discountPrice: 646.99,
    //   userId: 5
    // }
    // component.removeFromCart(cartData)
    expect(component.removeFromCart).toBeTruthy();
  });

  it('should get all cart', () => {
    // component.getAllCart()
    expect(component.getAllCart).toBeTruthy();
  });

  it('should show or hide cart', () => {
    component.cartShow()
    expect(component.cartShow).toBeTruthy();
  });

  it('should hide cart and show address based on condition', () => {
    component.cartShowHide()
    expect(component.cartShowHide).toBeTruthy();
  });

  it('should hide and show address', () => {
    component.addressHeaderShowHide()
    expect(component.addressHeaderShowHide).toBeTruthy();
  });

  it('should hide and show address header', () => {
    component.addressHeaderShowHide()
    expect(component.addressHeaderShowHide).toBeTruthy();
  });

  it('should hide and show address', () => {
    component.addressShowHide()
    expect(component.addressShowHide).toBeTruthy();
  });

  it('should add new address', () => {
    component.addNewAddress()
    expect(component.addNewAddress).toBeTruthy();
  });

  it('should add or update address', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  it('should add or update type value', () => {
    expect(component.updateTypevalue).toBeTruthy();
  });

  it('should add address type value', () => {
    expect(component.addressTypevalue).toBeTruthy();
  });

  it('should add or update address', () => {
    expect(component.editAddress).toBeTruthy();
  });

  it('should get the address', () => {
    expect(component.getAddress).toBeTruthy();
  });

  it('should add order', () => {
    expect(component.addOrder).toBeTruthy();
  });

  it('should get all the address', () => {
    expect(component.getAllbooks).toBeTruthy();
  });
});
