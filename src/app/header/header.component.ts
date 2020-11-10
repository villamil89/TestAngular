import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  static ROUTE_DATA_BREADCRUMB = 'miga';
  items: MenuItem[];
  home: MenuItem = { icon: 'pi pi-home' };

  constructor(
    private _router: Router,
    private _activedRoute: ActivatedRoute
  ) {
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.items = this.createBreadcrumbs(this._activedRoute.root)
      });
  }

  ngOnInit() {
  }

  createBreadcrumbs(route: ActivatedRoute, url: string = '#', breadcrumbs: MenuItem[] = []): MenuItem[] {

    if (route.children.length === 0) return breadcrumbs;

    for (const child of route.children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '')
        url += `/${routeURL}`;

      var label = child.snapshot.data[HeaderComponent.ROUTE_DATA_BREADCRUMB];
      if (!isNullOrUndefined(label)) {
        if (label.indexOf(':id') > -1)
          label = routeURL;
        breadcrumbs.push({ label, url });
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }


}
