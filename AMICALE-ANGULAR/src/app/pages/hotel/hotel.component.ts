import { Component, OnInit } from "@angular/core";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  Form
} from "@angular/forms";

import { startWith, map } from "rxjs/operators";
import { SharedService } from "../../layouts/shared-service";
import { HotelServiceService } from "service/hotel-service.service";
import { observable, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { AuthentificationService } from "service/authentification.service";
import {
  MatDatepickerInputEvent,
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { HotelModel } from "model/model.hotelModele";
import { ReservationModel } from "model/model.reservationModele";
import { ReservationServiceService } from "service/reservation-service.service";
import { Route, Router } from "@angular/router";
import { ResidenceService } from "service/residence.service";

const BREADCRUMBS: any[] = [
  {
    title: "Réservation",
    link: "#"
  },
  {
    title: "Hôtel",
    link: ""
  }
];

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.scss"]
})
export class HotelComponent implements OnInit {
  msg:string ="Vous n'etes pas dans la periode"
  pageTitle: string = "Hôtel";
  breadcrumb: any[] = BREADCRUMBS;
  stateCtrl: FormControl;
  filteredStates: any;
  list_hotel_name: String[];
  public api = "http://172.28.70.66:9090/amicale/amicale";
  hotel: HotelModel = new HotelModel();
  liste_nombre_chambres = ["1", "2", "3"];
  liste_type_chambre = ["Single", "Double", "Triple", "Quadruple"];
  liste_nb_personne = ["1", "2", "3", "4", "5", "6"];
  liste_adulte = ["1", "2", "3", "4", "5", "6"];
  liste_enfant = ["1", "2", "3", "4"];
  hotels = this.list_hotel_name;
  selected_hotel: string;
  ville: string;
  classement: string;
  type_reservation: string;
  matricule: string;
  nom: string;
  affectation: string;
  tel: string;
  mail: string;
  currentUser: any;
  selectedOption: string;
  public form: FormGroup;
  date_debut_selected: string;
  date_fin_selected: string;
  date_debut: string;
  date_fin: Date;
  nb_jours: number;
  reservation_hotel: ReservationModel = new ReservationModel();
  tel_portable: string;
  nb_chambre_selected: string;
  nb_personne_selected: string;
  typechambre_selected: string;
  nb_adult_selected: string;
  nb_enfants_selected: string;

  availableColors = [
    { name: "Default", color: "" },
    { name: "Primary", color: "primary" },
    { name: "Accent", color: "accent" },
    { name: "Warning", color: "warn" }
  ];
  minStay: number;
  commentaires: string;
  listReservation: string[];
  dateFin: string;
  dateDebut: string;
  test: string;
  min: string;
  max: any;
  list: string[];
  day: string;
  month: string;
  year: string;
  disabled =true
  dateDebutt="20/12/2019"
  dateFinn="22/12/2019"
  nbNuite="2"
  nbenfant: number=0
  AgeDesEnfants: any;
  agee:string
  listServiceFeature:string[]=[]
  newlist:string=""
  constructor(
    public datePipe: DatePipe,
    private _sharedService: SharedService,
    private _hotelServiceService: HotelServiceService,
    private _authentificationService: AuthentificationService,
    private _reservationService: ReservationServiceService,
    private http: HttpClient,
    private fb: FormBuilder,
    public router: Router,
    private dialog: MatDialog,
    private residenceService: ResidenceService
  ) {
    this.stateCtrl = new FormControl();
    this._sharedService.emitChange(this.pageTitle);
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.minStay=1
    this.getHotelName();
    this.form = this.fb.group({
      fname: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)])
      ],
      hotel: [null, Validators.required],
     // dateDebut: [null, Validators.required],
     // dateFin: [null, Validators.required],
      typeReservation: [null, Validators.required],
      nbreChambre: [null, Validators.required],
      typeChambre: [null, Validators.required],
      nbPersonne: [null, Validators.required],
      adulte: [null, Validators.required]
    });
    console.log(" USERS = " + JSON.stringify(this.currentUser));
  }

  age(age,index){

    this.AgeDesEnfants=this.AgeDesEnfants+age
    console.log("ageeeeeeeeeee"+age)
    console.log("INDEX : "+index)

    console.log("age t3ada  + +age"+JSON.stringify(this.listServiceFeature))

this.newlist=this.newlist+this.listServiceFeature[index]+"/"

  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

  standardEncoding(v: string): string {
    return encodeURIComponent(v)
      .replace("@", "%40")
      .replace(":", "%3A")
      .replace("$", "%24")
      .replace(",", "%2C")
      .replace(";", "%3B")
      .replace("+", "%2B")
      .replace(";", "%3D")
      .replace("?", "%3F")
      .replace("/", "%2F")
      .replace("é", "%C3%A9")
      .replace(" ", "%20")
      .replace("é", "Ã©")
      .replace("&","%26");
  }

  onDate_select_debut(event): void {
this.msg=" Veuillez Choisir Date Fin "
this.type_reservation=null
this.minStay=null

    this.date_debut_selected = this.datePipe.transform(event, "dd-MM-yyy");
    this.dateDebut = this.datePipe.transform(event, "dd/MM/yyy");
    console.log(
      "-------------------------------- date_debut selectionnée =" +
        JSON.stringify(this.date_debut_selected)
    );
  }
  onDate_select_fin(event): void {
    this.msg=" Veuillez choisir Type de Réservation "

    this.type_reservation=null
    this.minStay=null
    this.disabled=false

    this.date_fin_selected = this.datePipe.transform(event, "dd-MM-yyy");
    console.log(
      "-------------------------------- date_fin selectionnée =" +
        JSON.stringify(this.date_fin_selected)
    );

    this.dateFin = this.datePipe.transform(event, "dd/MM/yyy");

    let Date_fin_conv = this.parse(this.dateFin);
    let Date_deb_conv = this.parse(this.dateDebut);
    this.nb_jours =
      (Date_fin_conv.getTime() - Date_deb_conv.getTime()) / 86400000;
    console.log("-- ** ** ** --");
    console.log(
      "-----------------nombre de jours  =" + JSON.stringify(this.nb_jours)
    );

  }

  parse(value: any): Date | null {
    if (typeof value === "string" && value.indexOf("/") > -1) {
      const str = value.split("/");

      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);

      return new Date(year, month, date);
    } else if (typeof value === "string" && value === "") {
      return new Date();
    }
    const timestamp = typeof value === "number" ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  getAllHotel() {
    this._hotelServiceService.getAllHotel().subscribe(data => {
      console.log("liste hotel : " + JSON.stringify(data));
    });
  }

  getHotelName() {
    this._hotelServiceService.getHotelName().subscribe(data => {
      this.list_hotel_name = data;
      console.log("liste hotel Name : " + JSON.stringify(this.list_hotel_name));
    });
  }

  onHotelSelected(h) {
    this.selected_hotel = h;
    console.log(" **** selected hotel : " + this.selected_hotel);
    this._hotelServiceService
      .getHotelVille(this.standardEncoding(this.selected_hotel))
      .subscribe(data => {
        this.ville = data["ville"];
        this.classement = data["classement"];
      });

    this._reservationService.typeReservation(this.standardEncoding(h)).subscribe(data => {
      this.listReservation = data;
    });

   /* this._reservationService.testPeriode(h).subscribe(data => {
      this.min = data["date_DEBUT"];

      this.list = this.min.split("-", 3);
     this.day= this.list[0]
     this.month=this.list[1]

     this.year=this.list[2].substring(1, 2)

      console.log("List split " + JSON.stringify(this.list)+this.day +this.month +this.year);
      console.log("minn d te " + this.min);
      this.max = data["date_FIN"];
    });*/
  }

  getminstay(TYPE_RESERVATION) {
    this._reservationService
      .getMinstay(this.standardEncoding(this.selected_hotel), TYPE_RESERVATION, this.date_fin_selected)
      .subscribe(data => {
        this.minStay = parseInt(data);
        if(!data){
          this.msg=" Vous n'êtes pas dans la période "
        }
      });
  }

  recupVille(hotel) {
    this.selected_hotel = hotel;
    console.log("nameHotel " + hotel);
    this._hotelServiceService.getHotelVille(this.standardEncoding(hotel)).subscribe(data => {
      this.ville = data["ville"];
      console.log("ville" + this.ville);
    });
  }

  onNbChambreSelected(nb) {
    this.nb_chambre_selected = nb;
    console.log(" **** selected nb_personne : " + this.nb_chambre_selected);
  }

  onType_chambreSelected(type) {
    this.typechambre_selected = type;
    console.log(" **** type_chambre  : " + this.typechambre_selected);
  }
  onNb_persSelected(nb_pers) {
    this.nb_personne_selected = nb_pers;
    console.log(" **** nb_personne  : " + this.nb_personne_selected);
  }
  onNb_adultSelected(nb_adulte) {
    this.nb_adult_selected = nb_adulte;
    console.log(" **** nb_adult  : " + this.nb_adult_selected);
  }
  onNb_EnfSelected(nb_enfants) {
    this.nb_enfants_selected = nb_enfants;
    this.nbenfant=parseInt(nb_enfants)
    console.log(" **** nb_enfants  : " + this.nb_enfants_selected);
  }

  validate() {
    this.reservation_hotel.ageEnfant=this.newlist
    this.reservation_hotel.nature = "HOTEL";
    this.reservation_hotel.matricule = this.currentUser.matricule;
    this.reservation_hotel.nom = this.currentUser.nom;
    this.reservation_hotel.affectation = this.currentUser.affectation;

    this.reservation_hotel.num_TEL_FIX = this.currentUser.tel;
    this.reservation_hotel.num_TEL_PORT = this.tel_portable;
    this.reservation_hotel.nom_HOTEL = this.selected_hotel;

    this.reservation_hotel.ville = this.ville;
    this.reservation_hotel.classement = this.classement;

    //this.reservation_hotel.date_DEBUT = this.date_debut_selected;
this.reservation_hotel.date_DEBUT=this.dateDebutt

 //   this.reservation_hotel.date_FIN = this.date_fin_selected;
 this.reservation_hotel.date_FIN=this.dateFinn


 //   this.reservation_hotel.nb_JOURS = this.nb_jours.toString();
 this.reservation_hotel.nb_JOURS=this.nbNuite

    this.reservation_hotel.type_RESERVATION = this.type_reservation;
    this.reservation_hotel.nb_CHAMBRES = this.nb_chambre_selected;
    this.reservation_hotel.nb_LITS = "";
    this.reservation_hotel.type_CHAMBRE = this.typechambre_selected;
    this.reservation_hotel.nb_PERSONNE = this.nb_personne_selected;
    this.reservation_hotel.nb_ADULTES = this.nb_adult_selected;
    this.reservation_hotel.nb_ENFANT = this.nb_enfants_selected;
    let now = new Date();
    this.reservation_hotel.date_saisie = now;
    this.reservation_hotel.commentaires = this.commentaires;

    this.residenceService
      .addReservationResidence(this.reservation_hotel)
      .subscribe(data => {
        console.log("reservation residence " + JSON.stringify(data));
      });

    alert("Vos informations  ont été envoyés.");
    this.router.navigate(["/default-layout/dashboard"]);
  }
}

@Component({
  selector: "hotel.dialog.html",
  templateUrl: "hotel.dialog.html"
})
export class HotelDialogComponent {
  constructor(
    private router: Router,
    public SharedService: SharedService,
    public _reservationService: ReservationServiceService
  ) {}

  hotel: HotelComponent;
  reservation: ReservationModel;

  redirect() {
    this.SharedService.hotelEmitted$.subscribe(
      data => (this.reservation = data)
    );
    console.log("***** hotel :" + JSON.stringify(this.reservation));

    this._reservationService.addReservation(this.reservation).subscribe(
      data => {
        console.log("-- save data : " + JSON.stringify(data));
      },
      err => {
        console.log("-- save data error : " + JSON.stringify(err));
      }
    );

    console.log("// navigate to dashboard");
    this.router.navigate(["/default-layout/dashboard"]);
  }
}
