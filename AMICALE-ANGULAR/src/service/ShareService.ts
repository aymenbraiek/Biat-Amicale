import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShareService {
  listReservationInit: any;
  private listReservation = new BehaviorSubject<any>(this.listReservationInit);
  currentlistReservation = this.listReservation.asObservable();

  constructor() {}

  newlistReservation(pageUsers: any) {
    this.listReservation.next(pageUsers);
  }
}
