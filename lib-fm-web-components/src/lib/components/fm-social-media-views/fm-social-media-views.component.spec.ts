import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FmSocialMediaViewsComponent } from './fm-social-media-views.component';

describe('FmSocialMediaViewsComponent', () => {
  let component: FmSocialMediaViewsComponent;
  let fixture: ComponentFixture<FmSocialMediaViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmSocialMediaViewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FmSocialMediaViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
