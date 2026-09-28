import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MenuService } from '../../../../../../helper/menu';
import {
  HORIZONTAL_MENU_ITEMS,
  MenuItemTypes,
} from '../../../../../../helper/data';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-more-menu-dropdown',
  imports: [RouterLink, NgbDropdown, NgbDropdownModule],
  standalone: true,
  template: `
    @for (item of horizontalMenu; track $index) { @if ($index === 2) {
    <li
      class="nav-item dropdown"
      ngbDropdown
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
      >
        {{ item.label }}
      </a>

      <div
        class="dropdown-menu dropdown-menu-size-xl dropdown-menu-center p-xl-3"
        ngbDropdownMenu
      >
        <div class="row row-cols-1 row-cols-md-2 pt-2">
          <div class="col">
            @for (child of item.children?.slice(0, 3); track $index) {
            <div
              class="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3"
            >
              <div class="d-flex">
                <div
                  class="icon-md {{ child.iconBg }} {{
                    child.iconColor
                  }} rounded flex-shrink-0"
                >
                  <i [class]="child.icon + ' fs-6'"></i>
                </div>
                <div class="mx-3">
                  <p class="stretched-link heading-color fw-bold mb-0">
                    {{ child.label }}
                  </p>
                  <p class="mb-0 text-body small">{{ child.description }}</p>
                </div>
              </div>
              <a
                class="icon-link icon-link-hover text-primary-hover stretched-link"
                [routerLink]="child.url"
              >
                <i class="bi bi-chevron-right"></i>
              </a>
            </div>
            }
          </div>
          <div class="col">
            @for (child of item.children?.slice(3); track $index) {
            <div
              class="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3"
            >
              <div class="d-flex">
                <div
                  class="icon-md {{ child.iconBg }} {{
                    child.iconColor
                  }} rounded flex-shrink-0"
                >
                  <i [class]="child.icon + ' fs-6'"></i>
                </div>
                <div class="mx-3">
                  <p class="stretched-link heading-color fw-bold mb-0">
                    {{ child.label }}
                  </p>
                  <p class="mb-0 text-body small">{{ child.description }}</p>
                </div>
              </div>
              <a
                class="icon-link icon-link-hover text-primary-hover stretched-link"
                [routerLink]="child.url"
              >
                <i class="bi bi-chevron-right"></i>
              </a>
            </div>
            }
          </div>
        </div>
      </div>
    </li>
    } }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class MoreMenuDropdown {
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
