import { Component, OnInit } from '@angular/core';
import { getValuesOfX } from '../services/variable.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.page.html',
  styleUrls: ['./solution.page.scss'],
})
export class SolutionPage implements OnInit {

  constructor() { }

  solution=getValuesOfX();

  ngOnInit() {
  }

}
