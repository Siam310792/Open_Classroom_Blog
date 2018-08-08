import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  Posts = [
  {
  	title : "Premier post",
  	content : "Contenu du premier post",
  	loveIts : 0,
  	created_at : new Date()
  },
  {
  	title : "Premier post",
  	content : "Contenu du premier post",
  	loveIts : 0,
  	created_at : new Date()
  },
  {
  	title : "Premier post",
  	content : "Contenu du premier post",
  	loveIts : 0,
  	created_at : new Date()
  }
  ]

	constructor() {
	}

  
}
