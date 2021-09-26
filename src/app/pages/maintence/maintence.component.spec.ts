import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenceComponent } from './maintence.component';

describe('MaintenceComponent', () => {
  let component: MaintenceComponent;
  let fixture: ComponentFixture<MaintenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
