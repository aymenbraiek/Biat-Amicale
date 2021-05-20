import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HotelModel } from "model/model.hotelModele";
import { ReservationModel } from "model/model.reservationModele";
import { type_reservation } from "model/model.type_reservation";

@Injectable({
  providedIn: "root"
})
export class ReservationServiceService {
  private addReservationURL = "http://172.28.70.66:9090/amicale/amicale/addReservation";

  constructor(public http: HttpClient) {}

  addReservation(reservation: ReservationModel): Observable<ReservationModel> {
    return this.http.post<ReservationModel>(
      `${this.addReservationURL}`,
      reservation
    );
  }

  ExistReservation(matricule: string): Observable<boolean> {
    return this.http.get<boolean>(
      `http://172.28.70.66:9090/amicale/amicale/ExistReservation?matricule=${matricule}`
    );
  }

  getMinstay(Nom_hotel, TYPE_RESERVATION, DATE_FIN): Observable<string> {
    return this.http.get<string>(
      `http://172.28.70.66:9090/amicale/amicale/getMinStay?Nom_hotel=${Nom_hotel}&TYPE_RESERVATION=${TYPE_RESERVATION}&DATE_FIN=${DATE_FIN}`
    );
  }

  typeReservation(Nom_hotel): Observable<string[]> {
    return this.http.get<string[]>(
      `http://172.28.70.66:9090/amicale/amicale/typeReservation?Nom_hotel=${Nom_hotel}`
    );
  }

  testPeriode(Nom_hotel): Observable<type_reservation> {
    return this.http.get<type_reservation>(
      `http://172.28.70.66:9090/amicale/amicale/testPeriode?Nom_hotel=${Nom_hotel}`
    );
  }

  findAllReservation(): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(
      `http://172.28.70.66:9090/amicale/amicale/findAllReservation`
    );
  }
}
