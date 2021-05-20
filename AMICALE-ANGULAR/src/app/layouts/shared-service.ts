import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HotelModel } from 'model/model.hotelModele';
import { ReservationModel } from 'model/model.reservationModele';

@Injectable({providedIn: "root"})
export class SharedService {
 hotelInit = new ReservationModel();

  // Observable string sources
  private emitChangeSource = new Subject();
  private hotelSource=new BehaviorSubject<ReservationModel>(this.hotelInit);

  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  hotelEmitted$= this.hotelSource.asObservable();

  // Service message commands
  emitChange(change: string) {
    this.emitChangeSource.next(change);
  }

emitHotel(hotel: ReservationModel)
{
  this.hotelSource.next(hotel);
}

}
