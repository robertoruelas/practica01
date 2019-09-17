import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas = [
    {
      name: 'page1',
      path: '/page1'
    },
    {
      name: 'page2',
      path: '/page2'
    },
    {
      name: 'page3',
      path: '/page3'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
