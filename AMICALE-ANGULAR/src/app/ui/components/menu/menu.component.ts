import { Component, OnInit } from "@angular/core";

import { IMenuItem } from "./menu-item";
import { MenuService } from "./menu.service";
import { Router } from "@angular/router";
import { ReservationServiceService } from "service/reservation-service.service";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  moduleId: module.id,
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  providers: [MenuService,MessageService],
  host: {
    class: "app-menu"
  },


})
export class MenuComponent implements OnInit {
  menuItems: IMenuItem[];
  exist: boolean = false;
  currentUser: any;
  msgs: Message[] = [];


  constructor(
    private menuService: MenuService,
    private router: Router,
    private reservationService: ReservationServiceService,
    private messageService: MessageService,

  ) {}

  getMenuItems(): void {
    const OBSERVER = {
      next: x => (this.menuItems = x),
      error: err => this.menuService.handleError(err)
    };
    this.menuService.getData().subscribe(OBSERVER);
  }

  getLiClasses(item: any, isActive: any) {
    return {
      "has-sub": item.sub,
      active: item.active || isActive,
      "menu-item-group": item.groupTitle,
      disabled: item.disabled
    };
  }
  getStyles(item: any) {
    return {
      background: item.bg,
      color: item.color
    };
  }

  ngOnInit(): void {
    this.getMenuItems();
  }

  toggle(event: Event, item: any, el: any) {
    event.preventDefault();

    let items: any[] = el.menuItems;

    if (item.active) {
      item.active = false;
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i].active = false;
      }
      item.active = true;
    }
  }
  test(title) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.reservationService
      .ExistReservation(this.currentUser.matricule)
      .subscribe(data => {
        this.exist = data;
        if (title === "Résidence"  && !this.exist) {
          this.router.navigate(["/default-layout/residence"]);
        }
       else if (title === "Hotel"   && !this.exist ) {
          this.router.navigate(["/default-layout/hotel"]);

        }
        else
        {alert("Vous avez déjà réservé!");
        this.router.navigate(["/default-layout/dashboard"]);

      }
     /*   this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});*/
      });
    console.log("title " + title);
  }

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
        .replace('/', '%2F')
        .replace('é', '%C3%A9')
        .replace(' ', '%20')
        .replace('é', 'Ã©')
        ;
  }
}
