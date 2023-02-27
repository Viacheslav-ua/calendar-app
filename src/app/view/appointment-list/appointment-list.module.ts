import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
  ],
  exports: [
    AppointmentListComponent
  ]
})
export class AppointmentListModule { }
