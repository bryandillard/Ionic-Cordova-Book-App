import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableofcontents',
  templateUrl: './tableofcontents.page.html',
  styleUrls: ['./tableofcontents.page.scss'],
})
export class TableofcontentsPage implements OnInit {

  public chapters =[
    {
      title: 'Cover Page',
      url: '/home'
    },
    {
      title: 'Chapter 1 The Beginning',
      url: '/chapter1',
    },
    {
      title: 'Chapter 2 The Middle',
      url: '/chapter2',
    },
    {
      title: 'Chapter 3 The End',
      url: '/chapter3',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
