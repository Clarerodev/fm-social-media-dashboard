import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowerDashboardComponent } from '../follower-dashboard/follower-dashboard.component';
import { FollowerHeaderComponent } from '../follower-header/follower-header.component';
import { FollowerViewsDashboardComponent } from '../follower-views-dashboard/follower-views-dashboard.component';

@Component({
  selector: 'fm-followers',
  standalone: true,
  imports: [CommonModule, FollowerDashboardComponent, FollowerHeaderComponent, FollowerViewsDashboardComponent],
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss'],
})
export class FollowersComponent {
  @Output() setThemeEvent: EventEmitter<string> = new EventEmitter();
  public theme = "";

  public setTheme(ev: string) {
    this.theme = ev;
    this.setThemeEvent.emit(ev);
  }
}
