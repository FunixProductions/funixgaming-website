import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchLevelsComponent } from './twitch-levels.component';

describe('TwitchLevelsComponent', () => {
  let component: TwitchLevelsComponent;
  let fixture: ComponentFixture<TwitchLevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitchLevelsComponent]
    });
    fixture = TestBed.createComponent(TwitchLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
