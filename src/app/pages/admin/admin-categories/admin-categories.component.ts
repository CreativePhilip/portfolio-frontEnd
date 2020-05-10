import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../../services/database-connection/database.service";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {

  categoryList = [];
  tableColumns = ['id', 'name', 'actions'];

  selectedCategory = null;
  editing = false;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getCategories().subscribe(value => {
      this.categoryList = value;
    });
  }

  createCategory() {
    this.editing = false;

    setTimeout( () => {
      this.editing = true;
      this.selectedCategory = null;
    }, 0);
  }

  editCategory(categoryID) {
    this.editing = false;

    setTimeout( () => {
      this.editing = true;
      this.selectedCategory = categoryID;
    }, 0);
  }

  crudAction() {
    this.editing = false;
  }

}
