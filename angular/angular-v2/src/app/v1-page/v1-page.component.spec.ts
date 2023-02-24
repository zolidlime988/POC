import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1PageComponent } from './v1-page.component';

describe('V1PageComponent', () => {
  let component: V1PageComponent;
  let fixture: ComponentFixture<V1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V1PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
