import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetActorsComponent } from './get-actors.component';

describe('GetActorsComponent', () => {
  let component: GetActorsComponent;
  let fixture: ComponentFixture<GetActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
