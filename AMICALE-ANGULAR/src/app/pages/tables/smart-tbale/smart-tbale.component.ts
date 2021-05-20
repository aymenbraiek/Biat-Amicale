import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { ReservationServiceService } from "service/reservation-service.service";
import { ReservationModel } from "model/model.reservationModele";
import { ShareService } from "service/ShareService";
import { SelectItem } from 'primeng/api';
import { Car } from 'model/model.car';
const BREADCRUMBS: any[] = [
  {
    title: "Réservation",
    link: "#"
  }
];


@Component({
  selector: "app-smart-tbale",
  templateUrl: "./smart-tbale.component.html",
  styleUrls: ["./smart-tbale.component.scss"]
})
export class SmartTbaleComponent implements OnInit {
  breadcrumb: any[] = BREADCRUMBS;
  listReservation: ReservationModel[];
  messageService: any;
  scrollableCols: { field: string; header: string }[];
  cols: { field: string; header: string ; width :string }[];
  dataTable: ReservationModel[];
  newCar: boolean;
  reservation: ReservationModel;
  displayDialog: boolean;
  reservations: ReservationModel[];
  selectedReservation: ReservationModel;
  cars1:  Car[]=[{vin:'dsad231ff', year:2013, brand:'audi', color:'black' }];

    cars2: Car[]=[{vin:'dsad231ff', year:2013, brand:'audi', color:'black' },{vin:'dsad231ff', year:2013, brand:'audi', color:'black' }];

    brands: SelectItem[];

    clonedCars: { [s: string]: Car; } = {};

  constructor(
    private reservation_service: ReservationServiceService,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    this.brands = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ];


    this.findAllReservation();

    this.scrollableCols = [
      { field: "matricule", header: "matricule" },
      { field: "nom", header: "nom" },
      { field: "affectation", header: "affectation" }
    ];

    this.cols = [
      { field: "matricule", header: "matricule" ,width: '25%'},
      { field: "nom", header: "nom" ,width: '25%'},
      { field: "affectation", header: "affectation" ,width: '25%' },
      { field: "nom_HOTEL", header: "nom_HOTEL" ,width: '25%'},
      { field: "ville", header: "ville" ,width: '25%'},
      { field: "classement", header: "classement" ,width: '25%'},
      { field: "type_RESERVATION", header: "type_RESERVATION" ,width: '25%'},
      { field: "date_DEBUT", header: "date_DEBUT" ,width: '25%'},
      { field: "date_FIN", header: "date_FIN",width: '25%' },
      { field: "num_TEL_FIX", header: "num_TEL_FIX" ,width: '25%'},
      { field: "num_TEL_PORT", header: "num_TEL_PORT" ,width: '25%'},
      { field: "nb_JOURS", header: "nb_JOURS" ,width: '25%'},
      { field: "nb_CHAMBRES", header: "nb_CHAMBRES",width: '25%' },
      { field: "nb_ADULTES", header: "nb_ADULTES",width: '25%' },
      { field: "nb_ENFANTS", header: "nb_ENFANTS" ,width: '25%'},
      { field: "commentaires", header: "commentaires",width: '25%' },
      { field: "Action", header: "Action",width: '25%' }
    ];
  }

  public settings = {
    columns: {
      matricule: {
        title: "matricule",
        filter: true
      },
      nom: {
        title: "nom",
        filter: true
      },
      affectation: {
        title: "affectation",
        filter: true
      },
      num_TEL_FIX: {
        title: "num_TEL_FIX"
      },
      num_TEL_PORT: {
        title: "num_TEL_PORT"
      },
      nature: { title: "nature" },

      nom_HOTEL: {
        title: "nom_HOTEL"
      },
      ville: {
        title: "ville"
      },
      classement: {
        title: "classement"
      },
      date_DEBUT: {
        title: "date_DEBUT"
      },
      date_FIN: {
        title: "date_FIN"
      },
      nb_JOURS: {
        title: "nb_JOURS"
      },
      type_RESERVATION: {
        title: "type_RESERVATION"
      },
      nb_CHAMBRES: {
        title: "nb_CHAMBRES"
      },
      nb_LITS: {
        title: "nb_LITS"
      },
      type_CHAMBRE: {
        title: "type_CHAMBRE"
      },
      nb_PERSONNE: {
        title: "nb_PERSONNE"
      },
      nb_ADULTES: {
        title: "nb_ADULTES"
      },
      nb_ENFANTS: {
        title: "nb_ENFANTS"
      },
      date_saisie: {
        title: "date_saisie"
      },
      periode: {
        title: "periode"
      },
      type_res: {
        title: "type_res"
      },
      commentaires: {
        title: "commentaires"
      }
    },
    pager: {
      display: true,
      perPage: 10
    },
    actions: {
      columnTitle: "Action",
      add: true,
      edit: true,
      delete: false,
      position: "left"
    },
    attr: {
      class: "table table-striped table-bordered table-hover"
    },
    defaultStyle: true
  };
  data = [];

  findAllReservation() {
    this.reservation_service.findAllReservation().subscribe(data => {
      this.dataTable = data;
      this.shareService.newlistReservation(this.dataTable);
      this.shareService.currentlistReservation.subscribe(data => {
        this.dataTable = data;
      });
    });
  }

 /* onRowEditInit(reservation: ReservationModel) {
    this.clonedCars[reservation.matricule] = { ...reservation };
  }

  onRowEditSave(reservation: ReservationModel) {
    if (reservation.matricule) {
      delete this.clonedCars[reservation.matricule];
      this.messageService.add({
        severity: "success",
        summary: "Success",
        detail: "Car is updated"
      });
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Year is required"
      });
    }
  }
*/


  showDialogToAdd() {
    this.newCar = true;
   // this.reservation = {};
    this.displayDialog = true;
  }

  save() {
    let reservations = [...this.reservations];
    if (this.newCar) reservations.push(this.reservation);
    else reservations[this.reservations.indexOf(this.selectedReservation)] = this.reservation;

    this.reservations = reservations;
    this.reservation = null;
    this.displayDialog = false;
  }



onRowEditInit(car: Car) {
  this.clonedCars[car.vin] = {...car};
}

onRowEditSave(car: Car) {
  if (car.year > 0) {
      delete this.clonedCars[car.vin];
      this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
  }
  else {
      this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
  }
}

onRowEditCancel(car: Car, index: number) {
  this.cars2[index] = this.clonedCars[car.vin];
  delete this.clonedCars[car.vin];
}
}

/*
<p-table #dt [columns]="cols" [value]="dataTable" [rows]="10" [rowsPerPageOptions]="[10, 20, 30]"
  [class]="'pb-4'" [scrollable]="true" [reorderableColumns]="true" [paginator]="true"  [resizableColumns]="true" dataKey="matricule">

    <ng-template pTemplate="colgroup" let-columns>
      <colgroup>
        <col *ngFor="let col of columns" style="width:250px" />
      </colgroup>
    </ng-template>

    <ng-template pTemplate="header" let-columns>
      <tr>
        <th *ngFor="let libTabl of columns" [pSortableColumn]="libTabl.field" pReorderableColumn style="width:5px;" pResizableColumn>
          {{ libTabl.header }}

          <p-sortIcon [field]="libTabl.field"></p-sortIcon>
        </th>

      </tr>
      <tr>
        <th *ngFor="let libTabl of columns">
          <input pInputText type="text" (input)="dt.filter($event.target.value, libTabl.field, 'contains')" [value]="
              dt.filters[libTabl.field] ? dt.filters[libTabl.field].value : ''" />
        </th>

      </tr>
    </ng-template>

    <ng-template pTemplate="body" let-data let-editing="editing" let-ri="rowIndex">
      <tr [pEditableRow]="data">
        <td  class="ui-resizable-column">

          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.matricule" required >
            </ng-template>
            <ng-template pTemplate="output">
              {{data.matricule}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td class="ui-resizable-column">
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.nom">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.nom}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td class="ui-resizable-column">
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.affectation">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.affectation}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.nom_HOTEL">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.nom_HOTEL}}
            </ng-template>
          </p-cellEditor>
        </td>
        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.ville">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.ville}}
            </ng-template>
          </p-cellEditor>
        </td>
        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.classement">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.classement}}
            </ng-template>
          </p-cellEditor>
        </td>
        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.type_RESERVATION">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.type_RESERVATION}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.date_DEBUT">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.date_DEBUT}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.date_FIN">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.date_FIN}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.num_TEL_FIX">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.num_TEL_FIX}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.num_TEL_PORT">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.num_TEL_PORT}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.nb_JOURS">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.nb_JOURS}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.nb_CHAMBRES">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.nb_CHAMBRES}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.nb_ADULTES">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.nb_ADULTES}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.nb_ENFANTS">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.nb_ENFANTS}}
            </ng-template>
          </p-cellEditor>
        </td>

        <td>
          <p-cellEditor>
            <ng-template pTemplate="input">
              <input pInputText type="text" [(ngModel)]="data.commentaires">
            </ng-template>
            <ng-template pTemplate="output">
              {{data.commentaires}}
            </ng-template>
          </p-cellEditor>
        </td>
        <!--  <td *ngFor="let dataValue of (data | keys); let i = index" >
          {{ dataValue?.value }}
        </td>-->
        <td style="text-align:center">
          <button *ngIf="!editing"  type="button" pInitEditableRow
            (click)="onRowEditInit(data)"><i class="fa fa-check" aria-hidden="true"></i></button>
          <button *ngIf="editing" pButton type="button" pSaveEditableRow
            style="margin-right: .5em" (click)="onRowEditSave(data)"><i class="fa fa-check" aria-hidden="true"></i></button>
          <button *ngIf="editing" pButton type="button" pCancelEditableRow
            (click)="onRowEditCancel(data, ri)"><i class="fa fa-times" aria-hidden="true"></i></button>
        </td>

      </tr>
    </ng-template>
  </p-table>


*/
