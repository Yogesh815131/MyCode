import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  showDive: boolean = true;

  listItem = ["sagar", "yogesh", "ajay", "chetan", "roshan", "kajal", "pooja"]

  color = "pink";

  constructor(){}

  toggleEffect(){
    this.showDive = !this.showDive;
  }
}
