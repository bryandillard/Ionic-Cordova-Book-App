import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TableofcontentsPage } from './tableofcontents.page';

const routes: Routes = [
  {
    path: '',
    component: TableofcontentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TableofcontentsPage]
})
export class TableofcontentsPageModule {}
