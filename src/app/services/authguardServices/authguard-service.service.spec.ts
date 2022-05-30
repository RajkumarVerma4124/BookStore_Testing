import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthguardServiceService } from './authguard-service.service';

describe('AuthguardServiceService', () => {
  let service: AuthguardServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
      .compileComponents();
  });
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
