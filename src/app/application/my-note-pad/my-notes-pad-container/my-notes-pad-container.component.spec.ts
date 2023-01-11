import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesPadContainerComponent } from './my-notes-pad-container.component';

describe('MyNotesPadContainerComponent', () => {
  let component: MyNotesPadContainerComponent;
  let fixture: ComponentFixture<MyNotesPadContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNotesPadContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesPadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
