import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStationComponent } from './top-station.component';

describe('TopStationComponent', () => {
  let component: TopStationComponent;
  let fixture: ComponentFixture<TopStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
