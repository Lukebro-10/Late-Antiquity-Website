import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router, NavigationEnd } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy implements OnInit{
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(@Inject(DOCUMENT) _document?: any, private router: Router) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

    //Change Navbar styling based upon page section selected.
    router.events.subscribe(e => {
          if(e instanceof NavigationEnd) {
            if(this.router.url === '/' || this.router.url === '/dashboard') {
              console.log("I am home")
            }else if(this.router.url.includes('/rome_west')) {
              console.log("I am red")
            }else if(this.router.url.includes('/rome_east')) {
              console.log("I am purple")
            }else if(this.router.url.includes('/rome_old')) {
              console.log("I am gold")
            }else {
              console.log("wrong")
            }
          }
        });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
