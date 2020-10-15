import {Component, OnInit} from '@angular/core';


@Component({
             selector: 'app-admin-home',
             templateUrl: './admin-home.component.html',
             styleUrls: ['./admin-home.component.scss']
           })
export class AdminHomeComponent implements OnInit {
  showArticles = true;
  showCategories = false;
  showBlogs = false;
  showOther = false;

  constructor() {
  }

  ngOnInit() {
    let nav = document.querySelector('app-main-nav');
    let container = document.getElementById('container');
    container.style.height = `${window.innerHeight - Math.ceil(nav.getBoundingClientRect().height)}px`;
  }

  changeSubPage(id) {
    this.clearDisplayingPage();

    if (id === 1) {
      this.showArticles = true;
    } else if (id == 2) {
      this.showCategories = true;
    } else if (id == 3) {
      this.showBlogs = true;
    } else if (id == 4) {
      this.showOther = true;
    }
  }

  clearDisplayingPage() {
    this.showArticles = false;
    this.showCategories = false;
    this.showBlogs = false;
    this.showOther = false;
  }

}
