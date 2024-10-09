import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StatusPipe } from './pipes/status.pipe';
import { EditUserComponent } from './dialogs/edit-user/edit-user.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    HighlightDirective,
    StatusPipe,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
