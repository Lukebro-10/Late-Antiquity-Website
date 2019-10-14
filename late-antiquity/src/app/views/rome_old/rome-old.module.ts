import { NgModule } from '@angular/core';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { RomeOldComponent } from './rome_old.component';
import { RomeEconomyComponent } from './rome_economy.component';
import { RomeProvincesComponent } from './rome_provinces.component';
import { RomeReligionComponent } from './rome_religion.component';
import { RomeSocialComponent } from './rome_social.component';

import { RomeOldRoutingModule } from './rome-old-routing.module';

@NgModule({
  imports: [ RomeOldRoutingModule,
  TabsModule
 ],
  declarations: [ RomeOldComponent,
    RomeEconomyComponent,
    RomeProvincesComponent,
    RomeReligionComponent,
    RomeSocialComponent    
   ]
})
export class RomeOldModule {}
