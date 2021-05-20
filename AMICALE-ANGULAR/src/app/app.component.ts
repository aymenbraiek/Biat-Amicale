import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {


  currentUser: any;

constructor( private router: Router )
{
  this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
}

  ngOnInit() {

    if(this.currentUser){
        console.log("Partie 1 Current")

      localStorage.removeItem('currentUser')
      this.router.navigate(["/extra-layout/sign-in"]);

      }else{
        console.log("Partie 2 Current");
        this.router.navigate(["/extra-layout/sign-in"]);
      }







    this.router.navigate(["/extra-layout/sign-in"]);
  }


}
