import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TimelineComponent } from './timeline.component';
import { ReligionComponent } from './religion.component';
import { SocialComponent } from './social.component';
import { EconomyComponent } from './economy.component';
import { GeographyComponent } from './geography.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Persia'
    },
    children: [
      {
        path: '',
        redirectTo: 'timeline'
      },
      {
        path: 'timeline',
        component: TimelineComponent,
        data: {
          title: 'Timeline'
        }
      },
      {
        path: 'geography',
        component: GeographyComponent,
        data: {
          title: 'Geography'
        }
      },
      {
        path: 'religion',
        component: ReligionComponent,
        data: {
          title: 'Religion'
        }
      },
      {
        path: 'social',
        component: SocialComponent,
        data: {
          title: 'Social'
        }
      },
      {
        path: 'economy',
        component: EconomyComponent,
        data: {
          title: 'Economy'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersiaRoutingModule {}
