import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FmWebComponentsModule } from '@fm-social-media-monorepo/lib-fm-web-components'
import { CommonModule } from '@angular/common';
import { FollowersComponent } from '../components/followers/followers.component';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, FollowersComponent],
  selector: 'fm-social-media-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'fm-social-media';
  public followerData: any;

  constructor() {
    this.generateData();
  }

  private generateData() {
    this.followerData =
      {
        facebook: { type: 'facebook', userName: 'clarerodev', followerCount: '1987', followerByDay: '23', followerProgress: '25' }
      }
  }
}
