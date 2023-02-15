import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getNumber, setMatrix} from '../services/variable.service'

@Component({
  selector: 'app-system-equations',
  templateUrl: './system-equations.page.html',
  styleUrls: ['./system-equations.page.scss'],
})

export class SystemEquationsPage implements OnInit {
  
  constructor(private router: Router) { }

  numVar=getNumber();

  ec=new Array();

  const=new Array();
  

  ngOnInit() {
    for(let i=0; i<this.numVar; i++){
      this.ec[i]=new Array();
      for(let j=0; j<this.numVar; j++){
        this.ec[i][j]=0;
      }
      this.const[i]=0;
    }
  }

  Click(){
    setMatrix(this.const, this.ec);
    this.router.navigateByUrl('/tabs')
  }

}
