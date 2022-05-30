import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllbooksComponent } from './allbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FilterbookPipe } from '../../pipe/filterbook.pipe';

describe('AllbooksComponent', () => {
  let component: AllbooksComponent;
  let fixture: ComponentFixture<AllbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllbooksComponent, FilterbookPipe ],
      imports: [HttpClientModule, RouterTestingModule, MatSnackBarModule, NgxPaginationModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get all books', () => {
    component.getAllbooks()
    expect(component.getAllbooks).toBeTruthy();
  });
  it('should low to high books', () => {
    component.lowToHigh()
    expect(component.lowToHigh).toBeTruthy();
  });
  it('should high to low books', () => {
    component.highToLow()
    expect(component.highToLow).toBeTruthy();
  });
  it('should show newest book arrivals', () => {
    component.newestArrivals()
    expect(component.newestArrivals).toBeTruthy();
  });
  it('should qucik view the books', () => {
    component.quickview(3)
    expect(component.quickview).toBeTruthy();
  });
});
