import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FriendlistComponent } from '../friendlist/friendlist.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {path:'',component:HomeComponent},
  {path:'friendlist',component:FriendlistComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
