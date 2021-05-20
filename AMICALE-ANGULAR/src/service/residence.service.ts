import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Residence } from "model/model.Residence";
import { ReservationModel } from "model/model.reservationModele";

@Injectable({
  providedIn: "root"
})
export class ResidenceService {
  constructor(public http: HttpClient) {}

  public listResidenceName(): Observable<string[]> {
    return this.http.get<string[]>(
      `http://172.28.70.66:9090/amicale/amicale/listResidenceName`
    );
  }

  public ville(nameResidence): Observable<string> {
    return this.http.get(
      `http://172.28.70.66:9090/amicale/amicale/ville?NOM_RESIDENCE=${nameResidence}`,
      { responseType: "text" }
    );
  }

  public addReservationResidence(reservaion): Observable<ReservationModel> {
    return this.http.post<ReservationModel>(
      `http://172.28.70.66:9090/amicale/amicale/addReservation`,
      reservaion
    );
  }

  public periode(typeResidence): Observable<string[]> {
    return this.http.get<string[]>(
      `http://172.28.70.66:9090/amicale/amicale/periode?typeResidence=${typeResidence}`
    );
  }

  public nombreLit(nomResidence): Observable<string> {
    return this.http.get<string>(
      `http://172.28.70.66:9090/amicale/amicale/nombreLit?nomResidence=${nomResidence}`
    );
  }

  public typePeriode(nomResidence): Observable<string> {
    return this.http.get(
      `http://172.28.70.66:9090/amicale/amicale/typePeriode?nomResidence=${nomResidence}`,
      { responseType: "text" }
    );
  }
}
