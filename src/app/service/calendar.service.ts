import { Injectable } from "@angular/core";


export interface DayAppointments {
  date: Date;
  appointments: Array<string | null>
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  getAppointments(date: Date): Array<string | null> {
    const storageString = window.localStorage.getItem('appointments')
    if (!storageString) {
      return new Array(24)
    }

    const storage: DayAppointments[] = JSON.parse(storageString)
    const appointments = storage.find((item: DayAppointments) => item.date === date)?.appointments
    if (!appointments) {
      return new Array(24)
    }

    return appointments
  }
}
