import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fm-social-media-followers-lib',
  templateUrl: './fm-social-media-followers.component.html',
  styleUrls: ['./fm-social-media-followers.component.scss'],
})
export class FmSocialMediaFollowersComponent {

  @Input() followerData: any = null;
  @Input() theme: string = 'light';
}
