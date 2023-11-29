import { CommonModule } from "@angular/common";
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { defineCustomElements } from '@clarerodev/fm-web-components/dist/loader';
import { FmSocialMediaFollowersComponent } from "./components/fm-social-media-followers/fm-social-media-followers.component";
import { FmSwitchComponent } from "./components/fm-switch/fm-switch.component";
import { FmSocialMediaViewsComponent } from "./components/fm-social-media-views/fm-social-media-views.component";

defineCustomElements(window)
@NgModule({
    declarations: [FmSwitchComponent,
                FmSocialMediaFollowersComponent,
                FmSocialMediaViewsComponent],
    imports: [CommonModule],
    exports: [FmSwitchComponent,
        FmSocialMediaFollowersComponent,
        FmSocialMediaViewsComponent],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: () => defineCustomElements(),
            multi: true
        },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FmWebComponentsModule { }