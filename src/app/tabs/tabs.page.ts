import { Component, OnInit } from '@angular/core';
import { montante } from '../services/variable.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    montante();
  }

}
