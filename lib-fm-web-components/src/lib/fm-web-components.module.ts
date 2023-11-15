import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FmSocialMediaFollowersComponent } from "./components/fm-social-media-followers/fm-social-media-followers.component";
import { FmSocialMediaViewsComponent } from "./components/fm-social-media-views/fm-social-media-views.component";
@NgModule({
    imports: [CommonModule, FmSocialMediaFollowersComponent, FmSocialMediaViewsComponent],
    exports: [FmSocialMediaFollowersComponent, FmSocialMediaViewsComponent]
})
export class FmWebComponentsModule { }