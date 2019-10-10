import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomeOldComponent } from './rome_old.component';

const routes: Routes = [
  {
    path: '',
    component: RomeOldComponent,
    data: {
      title: 'RomeOld'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RomeOldRoutingModule {}
