import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RE_PG1_Component } from './re_pg1.component';
// import { RE_PG2_Component } from './re_pg2.component';
// import { RE_PG3_Component } from './re_pg3.component';
// import { RE_PG4_Component } from './re_pg4.component';
// import { RE_PG5_Component } from './re_pg5.component';
// import { RE_PG6_Component } from './re_pg6.component';
// import { RE_PG7_Component } from './re_pg7.component';
// import { RE_PG8_Component } from './re_pg8.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 're_pg1',
        component: RE_PG1_Component,
        data: {
          title: 'RE_PG1_Component'
        }
      }
      // {
      //   path: 're_pg2',
      //   component: RE_PG2_Component,
      //   data: {
      //     title: 'RE_PG2_Component'
      //   }
      // },
      // {
      //   path: 're_pg3',
      //   component: RE_PG3_Component,
      //   data: {
      //     title: 'RE_PG3_Component'
      //   }
      // },
      // {
      //   path: 're_pg4',
      //   component: RE_PG4_Component,
      //   data: {
      //     title: 'RE_PG4_Component'
      //   }
      // },
      // {
      //   path: 're_pg5',
      //   component: RE_PG5_Component,
      //   data: {
      //     title: 'RE_PG5_Component'
      //   }
      // },
      // {
      //   path: 're_pg6',
      //   component: RE_PG6_Component,
      //   data: {
      //     title: 'RE_PG6_Component'
      //   }
      // },
      // {
      //   path: 're_pg7',
      //   component: RE_PG7_Component,
      //   data: {
      //     title: 'RE_PG7_Component'
      //   }
      // },
      // {
      //   path: 're_pg8',
      //   component: RE_PG8_Component,
      //   data: {
      //     title: 'RE_PG8_Component'
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RE_RoutingModule {}
