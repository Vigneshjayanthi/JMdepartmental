import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private angFire: AngularFireAuth) { }
  login(){
    this.angFire.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
  }
  logout(){

  }
}
