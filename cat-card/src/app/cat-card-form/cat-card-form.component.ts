import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../modele/card';
import { DataService } from '../service/data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cat-card-form',
  templateUrl: './cat-card-form.component.html',
  styleUrls: ['./cat-card-form.component.css']
})
export class CatCardFormComponent implements OnInit {

  card_id: number = 0;
  next_id_card = 0
  card: Card = new Card(this.card_id, "", "", "");
  is_edit_form = false

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.dataService.getAllCards().then(cards =>
      this.next_id_card = cards.length + 1)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.card_id = parseInt(params.get('id'))
    })

    if (this.card_id) {
      this.dataService.getCard(this.card_id).then(card => {
        this.card = card
        this.is_edit_form = true
      })
    }
  }

  delete(card_id: number) {
    this.dataService.deleteCard(card_id);
    this.next_id_card -= 1
  }

  save(card) {
    const id_ = this.is_edit_form ? this.card_id : this.next_id_card
    const card_ = new Card(id_, card.title, card.imageUrl, card.description)
    if (this.is_edit_form)
      this.dataService.updateCard(card_)
    else
      this.dataService.createCard(card_)
    this.next_id_card += 1
  }


}
