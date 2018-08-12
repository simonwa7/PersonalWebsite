import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
	featured: string = 'Hiking';

  constructor() { }

  ngOnInit() {
  	console.log(this.featured == 'Hiking');
  }

  toggle_featured(value){
  	this.featured = value;
  }

}
