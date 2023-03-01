import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogAddUiComponent } from './dialog-add-ui/dialog-add-ui.component';

export interface DialogData {
  hour: number;
  appointment: string;
}

// export interface Appointments {
//   date: Date;
//   appointment: string;
// }

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentListComponent{

  public hour: number = 15
  public appointment!: string
  public appointments = new Array(24)

  // @Input() public dayAppointments!: Appointments[]
  @Input() public hoursAppointment!: []


  public get hoursCaption() {
    const arr = []
    for (let i = 0; i <= 23; i++) {
      arr.push(i)
    }
    return arr
  }

  constructor(
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) { }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }

  openDialog(item: number): void {
    console.log('openDialog', item);

    const dialogRef = this.dialog.open(DialogAddUiComponent, {
      data: {hour: item, appointment: this.appointment},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed -', result);
      this.appointments[result.hour] = result.appointment
      console.log(this.appointments);
      this.cdr.markForCheck();
    });
  }

}
