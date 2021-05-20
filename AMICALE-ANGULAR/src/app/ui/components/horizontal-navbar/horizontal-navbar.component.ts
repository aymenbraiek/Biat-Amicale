import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RouterLink, Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "horizontal-navbar",
  templateUrl: "horizontal-navbar.component.html",
  styleUrls: ["horizontal-navbar.component.scss"],
  host: {
    "[class.app-navbar]": "true",
    "[class.show-overlay]": "showOverlay"
  }
})
export class HorizontalNavbarComponent implements OnInit {
  @Input() title: string;
  @Input() openedSidebar: boolean;
  @Output() sidebarState = new EventEmitter();
  showOverlay: boolean;
  currentUser: any;

  constructor(public router : Router) {
    this.openedSidebar = false;
    this.showOverlay = false;
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

  }

  ngOnInit() {}

  logout()
  {  console.log("--- logout");
    localStorage.removeItem("currentUser");
    this.router.navigate(['/extra-layout/sign-in']);
  }

  open(event) {
    let clickedComponent = event.target.closest(".nav-item");
    let items = clickedComponent.parentElement.children;
    event.preventDefault();

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("opened");
    }
    clickedComponent.classList.add("opened");

    //Add class 'show-overlay'
    this.showOverlay = true;
  }

  close(event) {
    let clickedComponent = event.target;
    let items = clickedComponent.parentElement.children;

    event.preventDefault();

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("opened");
    }

    //Remove class 'show-overlay'
    this.showOverlay = false;
  }

  openSidebar() {
    this.openedSidebar = !this.openedSidebar;
    this.sidebarState.emit();
  }
}
