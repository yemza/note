import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotePadeMenuComponent } from './my-note-pade-menu.component';

describe('MyNotePadeMenuComponent', () => {
  let component: MyNotePadeMenuComponent;
  let fixture: ComponentFixture<MyNotePadeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNotePadeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotePadeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
