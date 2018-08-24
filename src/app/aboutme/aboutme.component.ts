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
    window.scrollTo({ left: 0, top: 750, behavior: "smooth" });
  }

  toggle_featured(value){
  	this.featured = value;
  }

}
