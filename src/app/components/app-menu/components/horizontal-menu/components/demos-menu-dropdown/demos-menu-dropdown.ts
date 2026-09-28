import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {
  NgbAccordionModule,
  NgbDropdown,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HORIZONTAL_MENU_ITEMS } from '../../../../../../helper/data';
import { MenuService } from '../../../../../../helper/menu';

@Component({
  selector: 'app-demos-menu-dropdown',
  standalone: true,
  imports: [RouterModule, NgbDropdownModule, NgbAccordionModule,RouterLink],
  template: `
    @for (item of horizontalMenu; track $index) { @if ($index === 0) {
    <li
      class="nav-item dropdown" ngbDropdown 
      #dropdown="ngbDropdown"
      (mouseenter)="openDropdown(dropdown)"
      (mouseleave)="closeDropdown(dropdown)"
    >
      <a
        [class]="'nav-link dropdown-toggle' + getActiveClass(item.key)"
        ngbDropdownToggle
        [routerLink]="[]"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >{{ item.label }}</a
      >
      <div
        class="dropdown-menu dropdown-menu-size-lg p-0 overflow-hidden"
        ngbDropdownMenu
      >
        <div class="row pt-2">
          <div class="col-sm-6">
            @for (child of item.children?.slice(0, 5); track $index) {
            <ul class="list-unstyled">
              <li>
                <a
                  [class]="'dropdown-item' + getActiveClass(child.key)"
                  routerLink="{{ child.url }}"
                  >{{ child.label }}</a
                >
              </li>
            </ul>
            }
          </div>
          <div class="col-sm-6">
            @for (child of item.children?.slice(5); track $index) {
            <ul class="list-unstyled">
              <li>
                <a
                  [class]="'dropdown-item' + getActiveClass(child.key)"
                  routerLink="{{ child.url }}"
                  >{{ child.label }}</a
                >
              </li>
            </ul>
            }
          </div>

          <div
            class="h-200px position-relative"
            style="background:url(assets/images/elements/nav-cta.jpg) no-repeat; background-size:cover; background-position:center;"
          >
            <div class="bg-overlay bg-dark bg-opacity-10"></div>
          </div>
        </div>
      </div>
    </li>
    } }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class DemosMenuDropdown {
  @Input() menuItems: any[] = [];
  @Input() activeMenuItems: string[] = [];
  horizontalMenu = HORIZONTAL_MENU_ITEMS;

  constructor(public menuService: MenuService) {}

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
