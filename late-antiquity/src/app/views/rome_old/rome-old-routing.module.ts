import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomeOldComponent } from './rome_old.component';
import { RomeEconomyComponent } from './rome_economy.component';
import { RomeProvincesComponent } from './rome_provinces.component';
import { RomeReligionComponent } from './rome_religion.component';
import { RomeSocialComponent } from './rome_social.component';

const routes: Routes = [
  {
    path: '',
    component: RomeOldComponent,
    data: {
      title: 'RomeOld'
    },
    children: [
      {
        path: '',
        redirectTo: 'rw_pg1'
      },
      {
        path: 'rome_politics',
        component: RomeOldComponent,
        data: {
          title: 'RomeOldComponent'
        }
      },
      {
        path: 'rome_economy',
        component: RomeEconomyComponent,
        data: {
          title: 'RomeEconomyComponent'
        }
      },
      {
        path: 'rome_provinces',
        component: RomeProvincesComponent,
        data: {
          title: 'RomeProvincesComponent'
        }
      },
      {
        path: 'rome_religion',
        component: RomeReligionComponent,
        data: {
          title: 'RomeReligionComponent'
        }
      },
      {
        path: 'rome_religion',
        component: RomeSocialComponent,
        data: {
          title: 'RomeSocialComponent'
        }
      },
      {
        path: 'rome_social',
        component: RomeSocialComponent,
        data: {
          title: 'RomeSocialComponent'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RomeOldRoutingModule {}
