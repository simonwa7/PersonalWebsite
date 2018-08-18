import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nonfeatured-project',
  templateUrl: './nonfeatured-project.component.html',
  styleUrls: ['./nonfeatured-project.component.css']
})
export class NonfeaturedProjectComponent implements OnInit {
	@Input('title')title: string;
	@Input('bio')bio: string;
	@Input('link')link: string;
	@Input('github')github: string;
  @Input('download')download: string;
  @Input('youtube')youtube: string;
  @Input('gif')gif: string;
  @Input('show')show: boolean;

	image: string;

  constructor() { }

  ngOnInit() {
  		this.image = this.link + '.png';
  		this.link += '.pdf'
      this.show = false;
  }

}
