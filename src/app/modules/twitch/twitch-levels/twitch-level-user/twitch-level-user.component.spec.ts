import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchLevelUserComponent } from './twitch-level-user.component';

describe('TwitchLevelUserComponent', () => {
  let component: TwitchLevelUserComponent;
  let fixture: ComponentFixture<TwitchLevelUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitchLevelUserComponent]
    });
    fixture = TestBed.createComponent(TwitchLevelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
