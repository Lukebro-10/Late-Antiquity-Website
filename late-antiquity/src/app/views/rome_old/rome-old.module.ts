import { NgModule } from '@angular/core';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { RomeOldComponent } from './rome_old.component';
import { RomeOldRoutingModule } from './rome-old-routing.module';

@NgModule({
  imports: [ RomeOldRoutingModule,
  TabsModule
 ],
  declarations: [ RomeOldComponent ]
})
export class RomeOldModule {}
