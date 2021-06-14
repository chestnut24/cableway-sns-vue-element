import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDirectionComponent } from './use-direction.component';

describe('UseDirectionComponent', () => {
  let component: UseDirectionComponent;
  let fixture: ComponentFixture<UseDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
