import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { map } from 'rxjs/operators';
import {UserModele} from 'model/model.UserModel';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private currentUserSubject: BehaviorSubject<UserModele>;
  public currentUser: Observable<UserModele>;
  apiUrl: 'http://172.28.70.66:9090/amicale';


  standardEncoding(v: string): string {
    return encodeURIComponent(v)
        .replace('@', '%40')
        .replace(':', '%3A')
        .replace('$', '%24')
        .replace(',', '%2C')
        .replace(';', '%3B')
        .replace('+', '%2B')
        .replace(';', '%3D')
        .replace('?', '%3F')
        .replace('/', '%2F');
  }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserModele>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser=this.currentUserSubject.asObservable();
   }


   public get currentUserValue(): UserModele {
    return this.currentUserSubject.value;
}

login(matricule: string, mot_de_passe: string):Observable<UserModele> {

  let mot_de_passe_encode = this.standardEncoding(mot_de_passe);
  console.log("Codage"+" "+mot_de_passe_encode);
  return this.http.get<UserModele>("http://172.28.70.66:9090/amicale/amicale/login?matricule="+matricule+"&mot_de_passe="+mot_de_passe_encode)
      .pipe(map(user => {
        let user_connect =  user;
        if (user) {
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user_connect);
          }
          return user;
      }));
}

logout()
{
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}


}
