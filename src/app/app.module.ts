import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { RoleComponent } from './pages/role/role.component';
import { CarComponent } from './pages/car/car.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DailysComponent } from './pages/dailys/dailys.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { MaintenceComponent } from './pages/maintence/maintence.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    CarComponent,
    DriversComponent,
    AdminComponent,
    DailysComponent,
    LeaveComponent,
    MaintenceComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
