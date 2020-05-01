import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Input("floating") floating:boolean;
  constructor() { }

  ngOnInit() {
    if (this.floating) {
      let header = document.querySelector('header');
      let filler = document.getElementById('dummy-container');
      filler.style.height =`${header.scrollHeight}px`;

      header.classList.add("float-top");
    }
  }

}
