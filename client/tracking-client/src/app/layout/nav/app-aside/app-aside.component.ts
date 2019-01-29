import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html',
  styleUrls: ['./app-aside.component.css']
})
export class AppAsideComponent implements OnInit {
  currentPath: string = "/tracking";

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url;
      }
    });
  }

  ngOnInit() {

  }

}