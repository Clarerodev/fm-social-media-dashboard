import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowerViewsDashboardComponent } from './follower-views-dashboard.component';

describe('FollowerViewsDashboardComponent', () => {
  let component: FollowerViewsDashboardComponent;
  let fixture: ComponentFixture<FollowerViewsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowerViewsDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowerViewsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
