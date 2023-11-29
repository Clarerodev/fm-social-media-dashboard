import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmWebComponentsModule } from '@fm-social-media-monorepo/lib-fm-web-components';

@Component({
  selector: 'fm-views-dashboard',
  standalone: true,
  imports: [CommonModule, FmWebComponentsModule],
  templateUrl: './follower-views-dashboard.component.html',
  styleUrls: ['./follower-views-dashboard.component.scss'],
})
export class FollowerViewsDashboardComponent {
  @Input() theme: string = 'light';
  public viewData: any;

  constructor() {
    this.generateData();
  }

  private generateData() {
    this.viewData = [
      { type: 'facebook', likesCount: '87', likesByDay: '3' },
      { type: 'facebook', likesCount: '52', likesByDay: '-2' },
      { type: 'instagram', likesCount: '5462', likesByDay: '2257' },
      { type: 'instagram', likesCount: '52k', likesByDay: '1375' },
      { type: 'twitter', likesCount: '117', likesByDay: '303' },
      { type: 'twitter', likesCount: '507', likesByDay: '553' },
      { type: 'youtube', likesCount: '107', likesByDay: '-19' },
      { type: 'youtube', likesCount: '1407', likesByDay: '-12' },
    ]
  }
}
