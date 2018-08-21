import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname:string = 'William';
  lastname:string =  'Simon';
  bio = 'I am a recent graduate from Tufts University with a passion for understanding and developing algorithms for quantum computation'
}
