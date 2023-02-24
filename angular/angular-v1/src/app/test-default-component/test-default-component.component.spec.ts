import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDefaultComponentComponent } from './test-default-component.component';

describe('TestDefaultComponentComponent', () => {
  let component: TestDefaultComponentComponent;
  let fixture: ComponentFixture<TestDefaultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDefaultComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDefaultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
