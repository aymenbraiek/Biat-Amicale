import { Component, OnInit } from "@angular/core";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

import { startWith, map } from "rxjs/operators";
import { HotelServiceService } from "service/hotel-service.service";
import { observable, Observable, from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { AuthentificationService } from "service/authentification.service";
import {
  MatDialog,
  MatDialogRef,
  MatDatepickerInputEvent
} from "@angular/material";
import { SharedService } from "app/layouts/shared-service";
import { ResidenceService } from "service/residence.service";
import { Residence } from "model/model.Residence";
import { ReservationModel } from "model/model.reservationModele";
import { HotelDialogComponent } from "../hotel/hotel.component";
import { Router } from "@angular/router";
import { ReservationServiceService } from "service/reservation-service.service";
import { MessageService } from "primeng/components/common/messageservice";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { routerNgProbeToken } from "@angular/router/src/router_module";

const BREADCRUMBS: any[] = [
  {
    title: "Réservation",
    link: "#"
  },
  {
    title: "Résidence",
    link: ""
  }
];

@Component({
  selector: "app-residence",
  templateUrl: "./residence.component.html",
  styleUrls: ["./residence.component.scss"]
})
export class ResidenceComponent implements OnInit {
  pageTitle: string = "Réservation résidence ";
  breadcrumb: any[] = BREADCRUMBS;
  listResidence: string[];
  villeResidence: string;
  selectedRes: any;
  residence: Residence = new Residence();
  reservation: ReservationModel = new ReservationModel();

  listLit: string[] = ["1", "2"];
  date_debut_selected: string;
  date_Fin_selected: string;
  currentUser: any;
  tel_port = new FormControl("", [
    Validators.required,
    Validators.maxLength(8),
    Validators.minLength(8)
  ]);
  tel_portable: string;
  selectlit: any;
  selectedlit: any;
  listDates: string[];
  exist: boolean = false;
  periodedat: any;
  nombreLit: string;
  nombrejours: string;
  commentaires: string;

  msgs: Message[] = [];

  public form: FormGroup;
  form1: FormGroup;

  constructor(
    private dialog: MatDialog,
    public datePipe: DatePipe,
    private _sharedService: SharedService,
    private residenceService: ResidenceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this._sharedService.emitChange(this.pageTitle);
  }
  ngOnInit() {
    this.listResidenceName();
    this.form = this.fb.group({
      fname: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)])
      ],
      fresidence: [null, Validators.compose([Validators.required])]
    });
  }

  listResidenceName() {
    this.residenceService.listResidenceName().subscribe(data => {
      this.listResidence = data;
      console.log("list data" + data);
    });
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

  recupName(nameResidence) {
    this.selectedRes = nameResidence;
    console.log("nameResidencee " + nameResidence);
    this.residenceService
      .ville(this.standardEncoding(nameResidence))
      .subscribe(data => {
        this.reservation.ville = data;
        console.log("Residence.ville" + data);
      });
  }

  Nblit(lit) {
    this.selectedlit = lit;
  }
  periodedate(periode) {
    this.periodedat = periode;
  }
  saveResidence(reservation) {
    console.log(JSON.stringify(reservation));
    reservation.nature = "RESIDENCE";
    reservation.matricule = this.currentUser.matricule;
    reservation.nom = this.currentUser.nom;
    reservation.affectation = this.currentUser.affectation;
    reservation.num_TEL_FIX = this.currentUser.tel;
    reservation.nom_HOTEL = this.selectedRes;
    reservation.nb_LITS = this.selectedlit;
    reservation.periode = this.periodedat;
    let now = new Date();
    reservation.date_saisie = now;
    console.log(" commentaires" + this.commentaires);
    reservation.commentaires = this.commentaires;
    console.log(" RESERVATION " + JSON.stringify(reservation));

    this.residenceService
      .addReservationResidence(reservation)
      .subscribe(data => {
        console.log("reservation residence " + JSON.stringify(data));
      });

    alert("Vos informations  ont été envoyés.");
    this.router.navigate(["/default-layout/dashboard"]);
  }

  onDate_select_debut(event): void {
    this.date_debut_selected = this.datePipe.transform(event, "dd/MM/yyy");
    this.reservation.date_DEBUT = this.date_debut_selected;
    console.log(
      "-------------------------------- date_debut selectionnée =" +
        JSON.stringify(this.date_debut_selected)
    );
  }

  onDate_select_Fin(event): void {
    this.date_Fin_selected = this.datePipe.transform(event, "dd/MM/yyy");
    this.reservation.date_FIN = this.date_Fin_selected;
    console.log(
      "-------------------------------- date_Fin_selected selectionnée =" +
        JSON.stringify(this.date_Fin_selected)
    );
  }

  getErrorMessage() {
    return this.tel_port.hasError("required")
      ? "Numéro téléphone obligatoire"
      : this.tel_port.hasError("minLength(8)") ||
        this.tel_port.hasError("maxLength(8)")
      ? "Numéro téléphone non valide (8 caractères)"
      : "";
  }

  periode(nameRes) {
    this.exist = false;
    this.residenceService
      .typePeriode(this.standardEncoding(nameRes))
      .subscribe(data => {
        this.nombrejours = data;
        if (this.nombrejours !== "") {
          this.exist = true;
        }
        this.residenceService
          .periode(this.standardEncoding(this.nombrejours))
          .subscribe(data => {
            console.log(data);
            this.listDates = data;

            console.log(
              "exist   ************************" +
                this.exist +
                this.listDates.length
            );
          });
      });
  }

  NombreLit(nameRes) {
    this.residenceService
      .nombreLit(this.standardEncoding(nameRes))
      .subscribe(data => {
        this.nombreLit = data;
        console.log("nombre lit " + this.nombreLit);
      });
  }
  TypeRes(nameRes) {}
}

@Component({
  selector: "Residence.dialog.html",
  templateUrl: "Residence.dialog.html"
})
export class ResidenceDialogComponent {
  constructor(
    private router: Router,
    public SharedService: SharedService,
    public _reservationService: ReservationServiceService
  ) {}

  reservation: ReservationModel;

  redirect() {
    this.router.navigate(["/default-layout/dashboard"]);
  }
}
