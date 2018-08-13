import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonfeaturedProjectComponent } from './nonfeatured-project.component';

describe('NonfeaturedProjectComponent', () => {
  let component: NonfeaturedProjectComponent;
  let fixture: ComponentFixture<NonfeaturedProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonfeaturedProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonfeaturedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
