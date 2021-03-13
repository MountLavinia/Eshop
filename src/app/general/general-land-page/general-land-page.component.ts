import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-land-page',
  templateUrl: './general-land-page.component.html',
  styleUrls: ['./general-land-page.component.scss']
})
export class GeneralLandPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
}
