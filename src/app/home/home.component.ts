import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import * as login from 'facebook-chat-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  
  title = 'angularAnalysis';
  fs = require("fs");
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  appStatePath = 'C:\\Users\\cwiegand\\Desktop\\appstate.json';
  hasAppState: any;

  constructor(private data: DataService, private router: Router, private _snackBar: MatSnackBar) {

    this.hasAppState = this.fs.existsSync(this.appStatePath);

    if(!this.hasAppState) console.log("NO appState");
    else console.log("Es gab appState");

    if(this.hasAppState) this.router.navigate(['/friendlist']);
  }

  login() {

    var mailAddr = this.email.value;
    var pw = this.password.value;
    
    if ( mailAddr && pw ) {

      login({email: mailAddr, password: pw}, (err, api) => {

          if(err) return console.error(err);

          console.log("App State:");
          console.log(JSON.stringify(api.getAppState()));
          this.fs.writeFileSync(this.appStatePath, JSON.stringify(api.getAppState()));
      });
    }
  }

  getEmailErrorMessage() {

    return this.email.hasError('required') ? 'Bitte geben Sie eine E-Mail Adresse ein' :
        this.email.hasError('email') ? 'Keine gültige E-Mail Adresse' :
            '';
  }

  getPasswordErrorMessage() {

    return this.password.hasError('required') ? 'Bitte geben Sie ein Passwort ein' : '';
  }

  openSnackBar(message: string) {

    this._snackBar.open(message, '', {

      duration: 5000,
      panelClass: ['red-snack-bar']
    });
  }
}