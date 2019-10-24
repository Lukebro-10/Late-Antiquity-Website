// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TimelineComponent } from './timeline.component';
import { ReligionComponent } from './religion.component';
import { SocialComponent } from './social.component';
import { EconomyComponent } from './economy.component';
import { GeographyComponent } from './geography.component';

// Theme Routing
import { PersiaRoutingModule } from './persia-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PersiaRoutingModule
  ],
  declarations: [
    TimelineComponent,
    ReligionComponent,
    SocialComponent,
    EconomyComponent,
    GeographyComponent
  ]
})
export class PersiaModule { }
