import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router, NavigationEnd } from '@angular/router'

import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit{
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(private router: Router, @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

    }

    ngOnInit(){
      //Change Navbar styling based upon page section selected.
      this.router.events.subscribe(e => {
            if(e instanceof NavigationEnd) {
              if(this.router.url === '/' || this.router.url === '/dashboard') {
                $("app-header").css("background-image", "linear-gradient(to right, #aaaaaa , #222222)");
                $("app-sidebar").css("background-image", "linear-gradient(to bottom right, #aaaaaa , #222222)");
              }else if(this.router.url.includes('/rome_old')) {
                $("app-header").css("background-image", "linear-gradient(to right, #ccaa44,  #222222)");
                $("app-sidebar").css("background-image", "linear-gradient(to bottom right, #ccaa44, #222222)");
              }else if(this.router.url.includes('/rome_west')) {
                $("app-header").css("background-image", "linear-gradient(to right, #cc2222 , #222222)");
                $("app-sidebar").css("background-image", "linear-gradient(to bottom right, #cc2222 , #222222)");
              }else if(this.router.url.includes('/rome_east')) {
                $("app-header").css("background-image", "linear-gradient(to right, #cc22aa , #222222)");
                $("app-sidebar").css("background-image", "linear-gradient(to bottom right, #cc22aa , #222222)");
              }else {
                $("app-header").css("background-background", "white");
                $("app-sidebar").css("background-background", "white");
                console.log("wrong");
              }
            }
          });
    }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
