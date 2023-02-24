import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSvcOneComponent } from './test-svc-one.component';

describe('TestSvcOneComponent', () => {
  let component: TestSvcOneComponent;
  let fixture: ComponentFixture<TestSvcOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSvcOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSvcOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
