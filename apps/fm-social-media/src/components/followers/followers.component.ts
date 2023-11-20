import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowerDashboardComponent } from '../follower-dashboard/follower-dashboard.component';
import { FollowerHeaderComponent } from '../follower-header/follower-header.component';

@Component({
  selector: 'fm-followers',
  standalone: true,
  imports: [CommonModule, FollowerDashboardComponent, FollowerHeaderComponent],
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss'],
})
export class FollowersComponent {}
