import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { EditAdminUserComponent } from './admin/dialogs/edit-admin-user/edit-admin-user.component';
import { HighlightDirective } from './admin/directives/highlight.directive';
import { StatusPipe } from './admin/pipes/status.pipe';
import { LoginComponent } from './admin/login/login.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    EditAdminUserComponent,
    HighlightDirective,
    StatusPipe,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
