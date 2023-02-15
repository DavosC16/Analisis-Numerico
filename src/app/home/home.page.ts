import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'
import { setNum } from '../services/variable.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  numVar: any=null;  

  constructor(private alertController: AlertController,private router: Router) {}

  async Click() {

    if(this.numVar==null){
      const alert = await this.alertController.create({
      header: 'Error',
      message: 'Favor de introducir un numero',
      buttons: ['OK'],
      });

      await alert.present();
    }
    else if(this.numVar<=0||this.numVar%1!=0){
      const alert = await this.alertController.create({
      header: 'Error',
      message: 'Favor de introducir un numero valido',
      buttons: ['OK'],
      });

      await alert.present();

      this.numVar=null;
    }
    else if(this.numVar%1==0){
      setNum(this.numVar);
      this.router.navigateByUrl('/system-equations');
    }
  }
}