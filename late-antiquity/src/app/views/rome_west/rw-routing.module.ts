import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RW_PG1_Component } from './rw_pg1.component';
import { RW_PG2_Component } from './rw_pg2.component';
import { RW_PG3_Component } from './rw_pg3.component';
import { RW_PG4_Component } from './rw_pg4.component';
import { RW_PG5_Component } from './rw_pg5.component';
import { RW_PG6_Component } from './rw_pg6.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Western Empire'
    },
    children: [
      {
        path: '',
        redirectTo: 'rw_pg1'
      },
      {
        path: 'rw_pg1',
        component: RW_PG1_Component,
        data: {
          title: 'RW_PG1_Component'
        }
      },
      {
        path: 'rw_pg2',
        component: RW_PG2_Component,
        data: {
          title: 'RW_PG2_Component'
        }
      },
      {
        path: 'rw_pg3',
        component: RW_PG3_Component,
        data: {
          title: 'RW_PG3_Component'
        }
      },
      {
        path: 'rw_pg4',
        component: RW_PG4_Component,
        data: {
          title: 'RW_PG4_Component'
        }
      },
      {
        path: 'rw_pg5',
        component: RW_PG5_Component,
        data: {
          title: 'RW_PG5_Component'
        }
      },
      {
        path: 'rw_pg6',
        component: RW_PG6_Component,
        data: {
          title: 'RW_PG6_Component'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RW_RoutingModule {}
