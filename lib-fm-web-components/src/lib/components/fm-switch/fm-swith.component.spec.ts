import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FmSwithComponent } from './fm-swith.component';

describe('FmSwithComponent', () => {
  let component: FmSwithComponent;
  let fixture: ComponentFixture<FmSwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmSwithComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FmSwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
