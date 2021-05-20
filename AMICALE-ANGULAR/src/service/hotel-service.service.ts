import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HotelModel } from "model/model.hotelModele";

@Injectable({
  providedIn: "root"
})
export class HotelServiceService {
  private getAllHotelURL = "http://172.28.70.66:9090/amicale/amicale/getAllHotel";
  private getHotelNameURL = "http://172.28.70.66:9090/amicale/amicale/getHotelName";

  constructor(public http: HttpClient) {}

  getAllHotel(): Observable<HotelModel[]> {
    return this.http.get<HotelModel[]>(`${this.getAllHotelURL}`);
  }

  getHotelName(): Observable<String[]> {
    return this.http.get<String[]>(`${this.getHotelNameURL}`);
  }

 public getHotelVille(selected_hotel):Observable<HotelModel>{
  return this.http.get<HotelModel>(`http://172.28.70.66:9090/amicale/amicale/villeHotel?selected_hotel=${selected_hotel}`);
}

public getMinstay(selected_hotel):Observable<string>{
return this.http.get<string>(`http://172.28.70.66:9090/amicale/amicale/getMinstay?selected_hotel=${selected_hotel}`);
}


}
