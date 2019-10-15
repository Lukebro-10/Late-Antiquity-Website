// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Constantius I
import { RW_PG1_Component } from './rw_pg1.component';
import { RW_PG2_Component } from './rw_pg2.component';
import { RW_PG3_Component } from './rw_pg3.component';
import { RW_PG4_Component } from './rw_pg4.component';
import { RW_PG5_Component } from './rw_pg5.component';
import { RW_PG6_Component } from './rw_pg6.component';

// Components Routing
import { RW_RoutingModule } from './rw-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RW_RoutingModule
  ],
  declarations: [
    RW_PG1_Component,
    RW_PG2_Component,
    RW_PG3_Component,
    RW_PG4_Component,
    RW_PG5_Component,
    RW_PG6_Component
  ]
})
export class RWModule { }
