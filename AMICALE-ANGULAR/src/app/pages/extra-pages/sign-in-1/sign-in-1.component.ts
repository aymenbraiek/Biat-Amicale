import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { AuthentificationService } from "service/authentification.service";

@Component({
  selector: "page-sign-in-1",
  templateUrl: "./sign-in-1.component.html",
  styleUrls: ["./sign-in-1.component.scss"]
})
export class PageSignIn1Component implements OnInit {
  matricule: string;
  mot_de_passe: string;
  annee = new Date().getFullYear();
  loginForm: FormGroup;
  erreur:boolean
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AuthServ: AuthentificationService
  ) {}



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mat: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }


   onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log(" error mat et pswd obligatoires ");
      return;
  }

  this.AuthServ.login(this.matricule, this.mot_de_passe).subscribe(
      data => {
        console.log(JSON.stringify(data));
        console.log("mot de passe"+data.matricule)
        if(!data.matricule && !data.mot_de_passe){
          this.router.navigate(["/extra-layout/sign-in"]);
          this.erreur=true
        }
        else{
        this.router.navigate(["/default-layout/dashboard"]);}
      },
      err => {
        console.log(err);

      }
    );
  }
}
