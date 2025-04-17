import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailedComponent } from './company-detailed.component';

describe('CompanyDetailedComponent', () => {
  let component: CompanyDetailedComponent;
  let fixture: ComponentFixture<CompanyDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
