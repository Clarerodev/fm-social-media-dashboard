import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fm-social-media-followers-lib',
  templateUrl: './fm-social-media-followers.component.html',
  styleUrls: ['./fm-social-media-followers.component.scss'],
})
export class FmSocialMediaFollowersComponent {

  @Input() followerData: any = null;
  
  public data: string;

  constructor() {
    this.data = JSON.stringify({ type: 'facebook', userName: 'clarerodev', followerCount: '1987', followerByDay: '23', followerProgress: '25' });
    console.log("Constructor", this.data);
  }
}
