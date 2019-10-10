// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Constantius I (337-350)
import { RE_PG1_Component } from './re_pg1.component';
//Valentian Dynasty (361-379)
import { RE_PG2_Component } from './re_pg2.component';
//Theodosius I (379-395)
import { RE_PG3_Component } from './re_pg3.component';
//Arcadius and Pulcheria (395-421)
import { RE_PG4_Component } from './re_pg4.component';
//Theodosius II (421-450)
import { RE_PG5_Component } from './re_pg5.component';
//Early Leonid Dynasty (450-474)
import { RE_PG6_Component } from './re_pg6.component';
//Zeno (474-491)
import { RE_PG7_Component } from './re_pg7.component';
//Rise of the Justinians (491-527)
import { RE_PG8_Component } from './re_pg8.component';

// Components Routing
import { RE_RoutingModule } from './re-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RE_RoutingModule
  ],
  declarations: [
    RE_PG1_Component,
    RE_PG2_Component,
    RE_PG3_Component,
    RE_PG4_Component,
    RE_PG5_Component,
    RE_PG6_Component,
    RE_PG7_Component,
    RE_PG8_Component
  ]
})
export class REModule { }
