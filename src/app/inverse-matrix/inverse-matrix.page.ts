import { Component, OnInit } from '@angular/core';
import { getInverseMatrix } from '../services/variable.service';

@Component({
  selector: 'app-inverse-matrix',
  templateUrl: './inverse-matrix.page.html',
  styleUrls: ['./inverse-matrix.page.scss'],
})
export class InverseMatrixPage implements OnInit {

  constructor() { }

  inverse=getInverseMatrix();

  ngOnInit() {
  }

}
