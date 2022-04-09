import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {TemplateRoutingModule} from './template-routing.module';
import {BasicosComponent} from './basicos/basicos.component';
import {DinamicosComponent} from './dinamicos/dinamicos.component';
import {SwitchesComponent} from './switches/switches.component';

//Directiva
import {CustomMinDirectives} from "./directives/custom-min.directives";


@NgModule({
    declarations: [
        BasicosComponent,
        DinamicosComponent,
        SwitchesComponent,

        CustomMinDirectives
    ],
    exports: [
        CustomMinDirectives
    ],
    imports: [
        CommonModule,
        FormsModule,
        TemplateRoutingModule
    ]
})
export class TemplateModule {
}
