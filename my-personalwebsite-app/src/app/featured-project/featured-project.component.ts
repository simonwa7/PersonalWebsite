import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.css']
})
export class FeaturedProjectComponent implements OnInit {
	@Input('title') title: string;
	@Input('bio') bio: string;
	@Input('link') link: string;
  @Input('github')github: string;
  @Input('download')download: string;

	image: string;

  constructor() { }

  ngOnInit() {
  		this.image = this.link + '.png';
  		this.link += '.pdf'
  }

}
