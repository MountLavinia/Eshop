import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isopen: boolean = false;

  constructor() { }

  ngOnInit(): void { 
  }

  openSideBar() {
    this.isopen = true;
  }

  closeSideBar() {
    this.isopen = false;
  }

}
 