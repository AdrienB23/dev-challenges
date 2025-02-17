import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCodeComponent } from './note-code.component';

describe('NoteCodeComponent', () => {
  let component: NoteCodeComponent;
  let fixture: ComponentFixture<NoteCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
