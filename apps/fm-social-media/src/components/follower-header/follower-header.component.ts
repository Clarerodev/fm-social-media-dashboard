import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmWebComponentsModule } from '@fm-social-media-monorepo/lib-fm-web-components';

@Component({
  selector: 'fm-follower-header',
  standalone: true,
  imports: [CommonModule, FmWebComponentsModule],
  templateUrl: './follower-header.component.html',
  styleUrls: ['./follower-header.component.scss'],
})
export class FollowerHeaderComponent {
  public setTheme(ev: string) {
    console.log("setTheme", ev);
    
  }
}
