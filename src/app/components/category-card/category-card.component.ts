import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from "../../services/database-connection/Models/CategoryModel";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() category: CategoryModel;

  constructor() { }

  ngOnInit() {
  }

}
