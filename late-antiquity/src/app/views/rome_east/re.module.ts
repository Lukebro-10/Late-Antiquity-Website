// Angular
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RE_RoutingModule } from './re-routing.module';

//Constantius I
import { RE_PG1_Component } from './re_pg1.component';

// import { RE_PG2_Component } from './re_pg2.component';
//
// import { RE_PG3_Component } from './re_pg3.component';
//
// import { RE_PG4_Component } from './re_pg4.component';

// // Forms Component
// import { FormsComponent } from './forms.component';
//
// import { SwitchesComponent } from './switches.component';
// import { TablesComponent } from './tables.component';
//
// // Tabs Component
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { TabsComponent } from './tabs.component';
//
// // Carousel Component
// import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { CarouselsComponent } from './carousels.component';
//
// // Collapse Component
// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { CollapsesComponent } from './collapses.component';
//
// // Dropdowns Component
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//
// // Pagination Component
// import { PaginationModule } from 'ngx-bootstrap/pagination';
// import { PopoversComponent } from './popovers.component';

// Components Routing
import { RE_RoutingModule } from './re-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RE_RoutingModule
  ],
  declarations: [
    RE_PG1_Component
    // RE_PG2_Component,
    // RE_PG3_Component,
    // RE_PG4_Component
  ]
})
export class REModule { }
