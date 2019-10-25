import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date().getFullYear()
  displaybackButton = true

  constructor(private dataService: DataService) {
    this.dataService.initData()
  }
}
