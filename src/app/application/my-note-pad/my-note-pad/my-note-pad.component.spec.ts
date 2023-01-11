import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotePadComponent } from './my-note-pad.component';

describe('MyNotePadComponent', () => {
  let component: MyNotePadComponent;
  let fixture: ComponentFixture<MyNotePadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNotePadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
