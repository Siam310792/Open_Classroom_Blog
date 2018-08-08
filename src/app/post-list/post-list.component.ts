import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent implements OnInit {

  
  love : boolean = false;   //permet de définir quelle sera la ngClasse après clic sur le bouton LOVE IT
  dontLove : boolean = false;   //permet de définir quelle sera la ngClasse après clic sur le bouton DON'T LOVE IT  
  premierVote : boolean = true;   //Permet de savoir si le bouton a déjà été cliqué une fois, pour la couleur bleue

  @Input() titlePost : string;
  @Input() contentPost : string;
  @Input() loveIts : number = 0;
	@Input() createdAt : Date;

  constructor() {

  }

  ngOnInit() {
  }

  //
  onClickLove() {
    if (this.premierVote) {
       this.loveIts += 1;
       this.premierVote = false;
       this.love = true;
    } else {
      this.loveIts -= 1;
      this.love = false;
      this.premierVote = true;
    }
   
  }

  onClickDontLove() {
    if (this.premierVote) {
       this.loveIts -= 1;
       this.premierVote = false;
       this.dontLove = true;
    } else {
       this.loveIts += 1;
       this.dontLove = false;
       this.premierVote = true;
    }
  }

}
