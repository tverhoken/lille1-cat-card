import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { Card } from '../modele/card';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-card-list',
  templateUrl: './cat-card-list.component.html',
  styleUrls: ['./cat-card-list.component.css']
})
export class CatCardListComponent implements OnInit {

  initialCards: Card[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAllCards().then(cards => {
      this.initialCards = cards
    }).catch(error => {
      this.initialCards = []
      console.log('errr, card-list')
    })
  }

}
