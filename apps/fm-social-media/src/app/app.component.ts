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
  schemas: []
})
export class AppComponent {
  title = 'fm-social-media'
  public theme = '';

  constructor() { }
  
  public setTheme(ev: string) {
    this.theme = `${ev}`;
  }
}
