import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTensionComponent } from './top-tension.component';

describe('TopTensionComponent', () => {
  let component: TopTensionComponent;
  let fixture: ComponentFixture<TopTensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
