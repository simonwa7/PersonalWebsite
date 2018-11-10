import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname:string = 'William';
  lastname:string =  'Simon';
  bio_line1 = 'I recently graduated Manga Cum Laude from Tufts University, majoring in Chemical Physics and minoring in Computer Science.'
  bio_line2 = ' I have a passion for Software Engineering, Research, Data Science, Machine Learning, and Quantum Computing and I am looking to leverage the power of technology to solve the pressing issues currently facing humanity.'
}
