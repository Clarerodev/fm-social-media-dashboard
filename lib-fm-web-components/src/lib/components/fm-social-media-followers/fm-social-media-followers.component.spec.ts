import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FmSocialMediaFollowersComponent } from './fm-social-media-followers.component';

describe('FmSocialMediaFollowersComponent', () => {
  let component: FmSocialMediaFollowersComponent;
  let fixture: ComponentFixture<FmSocialMediaFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmSocialMediaFollowersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FmSocialMediaFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
