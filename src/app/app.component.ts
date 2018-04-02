import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDW8teo7KwcGl1SA8w5yaTsfrDECO89XoQ",
      authDomain: "comprasapp-12b64.firebaseapp.com",
      databaseURL: "https://comprasapp-12b64.firebaseio.com",
      projectId: "comprasapp-12b64",
      storageBucket: "comprasapp-12b64.appspot.com",
      messagingSenderId: "470573147126"
    })
  }

}
