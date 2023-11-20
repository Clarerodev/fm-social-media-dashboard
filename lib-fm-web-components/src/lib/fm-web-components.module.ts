import { CommonModule } from "@angular/common";
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { defineCustomElements } from '@clarerodev/fm-web-components/dist/loader';
import { FmSocialMediaFollowersComponent } from "./components/fm-social-media-followers/fm-social-media-followers.component";
import { FmSwithComponent } from "./components/fm-switch/fm-swith.component";

defineCustomElements(window)
@NgModule({
    declarations: [FmSwithComponent, FmSocialMediaFollowersComponent],
    imports: [CommonModule],
    exports: [FmSwithComponent, FmSocialMediaFollowersComponent],
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