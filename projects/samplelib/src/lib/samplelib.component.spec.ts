import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplelibComponent } from './samplelib.component';

describe('SamplelibComponent', () => {
  let component: SamplelibComponent;
  let fixture: ComponentFixture<SamplelibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplelibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
