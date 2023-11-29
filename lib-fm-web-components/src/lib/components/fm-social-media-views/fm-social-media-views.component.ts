import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fm-social-media-views-lib',
  templateUrl: './fm-social-media-views.component.html',
  styleUrls: ['./fm-social-media-views.component.scss'],
})
export class FmSocialMediaViewsComponent {
  @Input() followerData: any = null;
  @Input() theme: string = 'light';
}
