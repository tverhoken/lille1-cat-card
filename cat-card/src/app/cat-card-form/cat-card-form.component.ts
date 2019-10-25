import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../modele/card';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-cat-card-form',
  templateUrl: './cat-card-form.component.html',
  styleUrls: ['./cat-card-form.component.css']
})
export class CatCardFormComponent implements OnInit {

  card_id: number = 0;
  is_edit_form: boolean = false
  card: Card = new Card(0, "", "", "");
  isValidate = false
  isIdValid = true

  constructor(private route: ActivatedRoute, private dataService: DataService,
    private routerService: Router) {
    this.route.paramMap.subscribe(params => {
      this.card_id = parseInt(params.get('id'))
    })
  }

  ngOnInit() {
    if (this.card_id) {
      this.is_edit_form = true
      this.dataService.getCard(this.card_id).then(card => {
        this.card = card
      }).catch(_ =>
        this.isIdValid = false
      )
    }
  }

  delete() {
    this.dataService.deleteCard(this.card_id);
    this.routerService.navigate(['/cat-card-list'])
  }

  save(form) {
    if (form.invalid)
      this.isValidate = true
    else {
      if (this.is_edit_form)
        this.dataService.updateCard(this.card)
      else
        this.dataService.createCard(this.card).catch(_ => console.log("createdCard"))
      this.routerService.navigate(['/cat-card-list'])
    }
  }



  isValidateInput(input) {
    return input.invalid && (input.touched || input.dirty)
  }
}
