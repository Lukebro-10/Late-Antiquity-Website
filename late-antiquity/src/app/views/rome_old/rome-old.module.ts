import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { RomePoliticsComponent } from './rome_politics.component';
import { RomeEconomyComponent } from './rome_economy.component';
import { RomeProvincesComponent } from './rome_provinces.component';
import { RomeReligionComponent } from './rome_religion.component';
import { RomeSocialComponent } from './rome_social.component';

import { RomeOldRoutingModule } from './rome-old-routing.module';

@NgModule({
  imports: [ RomeOldRoutingModule,
  TabsModule,
  ChartsModule
 ],
  declarations: [ RomePoliticsComponent,
    RomeEconomyComponent,
    RomeProvincesComponent,
    RomeReligionComponent,
    RomeSocialComponent
   ]
})
export class RomeOldModule {}
