import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css']
})
export class ResumeSectionComponent implements OnInit {
	@Input('title')title: string;

	constructor() { }

	ngOnInit() {
	}

}
