import { Injectable } from "@angular/core";


export interface DayAppointments {
  date: string;
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
    console.log('storage', storage);

    const appointments = storage.find((item: DayAppointments) => item.date === date.toDateString())?.appointments
    console.log('appointments', appointments);

    if (!appointments) {
      return new Array(24)
    }

    return appointments
  }

  saveAppointments(dayAppointments: DayAppointments): void {
    const storageString = window.localStorage.getItem('appointments')
    if (storageString) {
      const storage: DayAppointments[] = JSON.parse(storageString)
      const filterStorage: DayAppointments[] = storage.filter(item => item.date !== dayAppointments.date)
      const newStorage: DayAppointments[] = [...filterStorage, dayAppointments]
      const newStorageString = JSON.stringify(newStorage)
      window.localStorage.setItem('appointments', newStorageString)
    } else {
      const storage: DayAppointments[] = [dayAppointments]
      const storageString = JSON.stringify(storage)
      window.localStorage.setItem('appointments', storageString)
    }
  }
}
