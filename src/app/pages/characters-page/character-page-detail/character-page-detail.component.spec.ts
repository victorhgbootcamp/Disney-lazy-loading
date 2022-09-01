import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPageDetailComponent } from './character-page-detail.component';

describe('CharacterPageDetailComponent', () => {
  let component: CharacterPageDetailComponent;
  let fixture: ComponentFixture<CharacterPageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterPageDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
