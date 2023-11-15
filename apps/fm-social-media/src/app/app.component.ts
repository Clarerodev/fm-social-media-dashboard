import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FmWebComponentsModule } from '@fm-social-media-monorepo/lib-fm-web-components'

@Component({
  standalone: true,
  imports: [RouterModule, FmWebComponentsModule],
  selector: 'fm-social-media-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'fm-social-media';
}
