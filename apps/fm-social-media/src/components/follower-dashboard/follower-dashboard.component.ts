import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmWebComponentsModule } from '@fm-social-media-monorepo/lib-fm-web-components';

@Component({
  selector: 'fm-follower-dashboard',
  standalone: true,
  imports: [CommonModule, FmWebComponentsModule],
  templateUrl: './follower-dashboard.component.html',
  styleUrls: ['./follower-dashboard.component.scss'],
})
export class FollowerDashboardComponent {
  @Input() theme: string = 'light';
  
  public followerData: any;

  constructor() {
    this.generateData();
  }

  private generateData() {
    this.followerData = [
      { type: 'facebook', userName: 'clarerodev', followerCount: '1987', followerByDay: '23' },
      { type: 'twitter', userName: 'nathanf', followerCount: '1044', followerByDay: '99' },
      { type: 'instagram', userName: 'realnathanf', followerCount: '11k', followerByDay: '23' },
      { type: 'youtube', userName: 'Natah F.', followerCount: '8239', followerByDay: '-144' },
    ]
  }
}
