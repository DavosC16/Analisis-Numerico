import { Component, OnInit } from '@angular/core';
import { getAdjunta, getNumber } from '../services/variable.service'

@Component({
  selector: 'app-adjugate-matrix',
  templateUrl: './adjugate-matrix.page.html',
  styleUrls: ['./adjugate-matrix.page.scss'],
})
export class AdjugateMatrixPage implements OnInit {

  constructor() { }

  adj=getAdjunta();

  ngOnInit() {
  }

}
