import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {
  HORIZONTAL_MENU_ITEMS,
  MenuItemTypes,
} from '../../../../../../helper/data';
import { MenuService } from '../../../../../../helper/menu';

interface MenuItem {
  key: string;
  label: string;
  parentKey: string;
  url?: string;
  badge?: string;
  children?: MenuItem[];
}
@Component({
  selector: 'app-pages-menu-dropdown',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule, RouterLink],
  styles: `
  .dropdown-link{
    color:var(--bs-dropdown-link-color)!important;
  }`,
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    @for (item of horizontalMenu; track $index) { @if ($index === 1) {
    <li
      class="nav-item dropdown"
      ngbDropdown
      #dropdown="ngbDropdown"
      (mouseenter)="openDropdown(dropdown)"
      (mouseleave)="closeDropdown(dropdown)"
    >
      <a
        ngbDropdownToggle
        [class]="'nav-link dropdown-toggle' + getActiveClass(item.key)"
        [routerLink]="[]"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-haspopup="true"
        aria-expanded="false"
        >{{ item.label }}</a
      >
      <ul class="dropdown-menu " ngbDropdownMenu>
        @for (child of item.children; track $index) { @if (hasSubChild(child)) {
        <li
          class="dropdown dropend"
          ngbDropdown
          #dropdownChild="ngbDropdown"
          (mouseenter)="openDropdown(dropdownChild)"
          (mouseleave)="closeDropdown(dropdownChild)"
        >
          <a
            [class]="
              'dropdown-link dropdown-toggle nav-link' +
              getActiveClass(child.key)
            "
            ngbDropdownToggle
            data-bs-toggle="dropdown"
            [routerLink]="[]"
            >{{ child.label }}</a
          >
          <ul class="dropdown-menu" ngbDropdownMenu>
            @for (children of child.children; track $index) {
            <li>
              <a
                [class]="'dropdown-item' + getActiveClass(children.key)"
                [routerLink]="children.url"
                >{{ children.label }}
                @if(children.badge){
                <span class="badge text-bg-success ms-2">2 Job</span>}</a
              >
            </li>
            }
          </ul>
        </li>

        } @else {
        <li>
          <a
            [class]="'dropdown-item' + getActiveClass(child.key)"
            [routerLink]="child.url"
            >{{ child.label }}</a
          >
        </li>
        } }
      </ul>
    </li>
    } }
  `,
})
export class PagesMenuDropdown {
  horizontalMenu = HORIZONTAL_MENU_ITEMS;
  @Input() menuItems: any[] = [];
  @Input() activeMenuItems: string[] = [];

  constructor(private menuService: MenuService) {}

  hasSubChild(
    item: MenuItemTypes
  ): item is MenuItemTypes & { children: MenuItemTypes[] } {
    return !!item.children && item.children.length > 0;
  }

  getActiveClass(key: string): string {
    return this.menuService.getActiveClass(this.activeMenuItems, key)
      ? ' active'
      : '';
  }

  openDropdown(dropdown: NgbDropdown) {
    dropdown.open();
  }

  closeDropdown(dropdown: NgbDropdown) {
    dropdown.close();
  }
}
