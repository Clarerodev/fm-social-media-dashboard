import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowerDashboardComponent } from './follower-dashboard.component';

describe('FollowerDashboardComponent', () => {
  let component: FollowerDashboardComponent;
  let fixture: ComponentFixture<FollowerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowerDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
