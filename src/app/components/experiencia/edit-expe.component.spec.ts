import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpeComponent } from './edit-expe.component';

describe('EditExpeComponent', () => {
  let component: EditExpeComponent;
  let fixture: ComponentFixture<EditExpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
