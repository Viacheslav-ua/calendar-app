import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { hoursList } from 'src/app/helpers/hours-list';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent{

  public hoursCaption = hoursList
  public appointments = new Array(24)

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }

}
