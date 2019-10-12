import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Card } from '../modele/card';

@Component({
  selector: 'app-cat-card-list',
  templateUrl: './cat-card-list.component.html',
  styleUrls: ['./cat-card-list.component.css']
})
export class CatCardListComponent implements OnInit {

  initialCards: Card[] = [];
 
  constructor(private dataService: DataService) {
    this.dataService.initData() 
    this.initialCards = this.dataService.getInitialCards()
  }
  
  ngOnInit() { }

}
