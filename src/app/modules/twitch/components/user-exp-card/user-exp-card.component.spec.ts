import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpCardComponent } from './user-exp-card.component';

describe('UserExpCardComponent', () => {
  let component: UserExpCardComponent;
  let fixture: ComponentFixture<UserExpCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserExpCardComponent]
    });
    fixture = TestBed.createComponent(UserExpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
