import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/database-connection/database.service";
import {CategoryModel} from "../../services/database-connection/Models/CategoryModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[];

  constructor(private db: DatabaseService,
              private router: Router) { }

  ngOnInit() {
    this.db.getCategories().subscribe(value =>{
      this.categories = value;
    });
  }

  onCardClick(cat) {
    this.router.navigateByUrl(`/categories/${cat.id}`);
  }

}
