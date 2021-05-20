import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {'class': 'app-footer'}
})
export class FooterComponent implements OnInit {
  annee = new Date().getFullYear();
  constructor() {}

  ngOnInit() {}
}