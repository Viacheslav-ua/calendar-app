import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {

  public activeDay!: Date
  public appointmentsOfDay!: Array<string | null>

  constructor( private calendarService: CalendarService) { }

  ngOnInit(): void {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    this.activeDay = today
    this.appointmentsOfDay = this.calendarService.getAppointments(this.activeDay);
  }

  onChange(e: Date) {
    this.activeDay = e
    this.appointmentsOfDay = this.calendarService.getAppointments(e);
  }

  onSave(appointments: Array<string | null>): void {
    this.calendarService.saveAppointments({ date: this.activeDay.toDateString(), appointments })
  }

}
