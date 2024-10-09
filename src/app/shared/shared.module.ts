import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { StatusPipe } from './pipes/status.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { SharedComponent } from './shared.component';
import { ComponentComponent } from './component/component.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    StatusPipe,
    HighlightDirective,
    SharedComponent,
    ComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
