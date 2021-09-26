import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './pages/role/role.component';
import { CarComponent } from './pages/car/car.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DailysComponent } from './pages/dailys/dailys.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { MaintenceComponent } from './pages/maintence/maintence.component';

const routes: Routes = [
  {path:'', redirectTo:'admin', pathMatch:'full'},
  { path: "cars", component: CarComponent},
  { path: "drivers", component: DriversComponent},
  { path: "admin", component: AdminComponent},
  { path: "roles", component: RoleComponent},
  { path: "dailys", component: DailysComponent},
  { path: "leave", component: LeaveComponent},
  { path: "maintence", component: MaintenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

