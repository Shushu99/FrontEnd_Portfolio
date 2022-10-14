import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApLogosComponent } from './ap-logos.component';

describe('ApLogosComponent', () => {
  let component: ApLogosComponent;
  let fixture: ComponentFixture<ApLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApLogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
