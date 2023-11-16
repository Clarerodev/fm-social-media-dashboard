import { CommonModule } from "@angular/common";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { defineCustomElements }   from '@clarerodev/fm-web-components/loader';

defineCustomElements(window);
@NgModule({
    imports: [CommonModule],
    exports: [],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: () => defineCustomElements,
            multi: true
        },
    ]
})
export class FmWebComponentsModule { }