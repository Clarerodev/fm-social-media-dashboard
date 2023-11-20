import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowerHeaderComponent } from './follower-header.component';

describe('FollowerHeaderComponent', () => {
  let component: FollowerHeaderComponent;
  let fixture: ComponentFixture<FollowerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowerHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
