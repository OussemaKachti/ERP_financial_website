import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  NgbAccordionModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbOffcanvas,
  NgbOffcanvasModule,
} from '@ng-bootstrap/ng-bootstrap';
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { DemosMenuDropdown } from './components/demos-menu-dropdown/demos-menu-dropdown';
import { PagesMenuDropdown } from './components/pages-menu-dropdown/pages-menu-dropdown';
import { MoreMenuDropdown } from './components/more-menu-dropdown/more-menu-dropdown';

import { basePath, currency } from '../../../../helper/constants';
import {
  storageThemeKey,
  ThemeModeService,
} from '../../../../services/theme-mode.service';
import { HORIZONTAL_MENU_ITEMS, MenuItemTypes } from '../../../../helper/data';
import { MenuService } from '../../../../helper/menu';
@Component({
  selector: 'app-horizontal-menu',
  standalone: true,
  imports: [
    RouterModule,
    DemosMenuDropdown,
    PagesMenuDropdown,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgbOffcanvasModule,
    RouterLink,
    MoreMenuDropdown,
  ],
  templateUrl: './horizontal-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class HorizontalMenu implements OnInit {
  @Input() bookCall!: boolean;
  @Input() item!: MenuItemTypes;
  @Input() itemClassName?: string;
  @Input() linkClassName?: string;
  @Input() level!: number;

  @Input() alertShow!: boolean;
  @Input() darkAlertShow!: boolean;
  @Input() loginAlert: boolean = false;
  @Input() cartShow: boolean = false;

  @Input() signUp!: boolean;
  @Input() schedule!: boolean;
  @Input() download!: boolean;
  @Input() loginSignup!: boolean;
  @Input() theme!: string;
  @Input() headerClass!: string;
  isCollapsed = true;
  navItem = HORIZONTAL_MENU_ITEMS;

  currency = currency;
  menuItems: any[] = [];
  activeMenuItems: string[] = [];
  preferredTheme: string = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  getTheme = localStorage.getItem(storageThemeKey);
  mode: string = this.getTheme ? this.getTheme : this.preferredTheme;

  public themeModeService = inject(ThemeModeService);
  offcanvasService = inject(NgbOffcanvas);
  // isOffcanvasOpen: boolean = false

  // state$!: Observable<ShoppingState>
  // cartItemsLength$: Observable<number>

  scrollY = 0;
  trimmedURL = location?.pathname?.replaceAll(
    basePath !== '' ? basePath + '/' : '',
    '/'
  );
  constructor(
    private elementRef: ElementRef,
    private menuService: MenuService,
    private router: Router
  ) {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  ngOnInit() {
    this.menuItems = this.menuService.getAppMenuItems();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.setActiveMenu(event.url);
      }
    });

    this.setActiveMenu(this.router.url);
    // this.offcanvasService.activeInstance.subscribe((e) => {
    //   this.isOffcanvasOpen = Boolean(e)
    // })
  }
  handleScroll = () => {
    this.scrollY = window.scrollY;
  };

  setActiveMenu(url: string): void {
    const matchingMenuItem = this.menuService.getMenuItemFromURL(
      this.menuItems,
      this.trimmedURL
    );
    if (matchingMenuItem) {
      const activeMt = this.menuService.findMenuItem(
        this.menuItems,
        matchingMenuItem.key
      );
      if (activeMt) {
        this.activeMenuItems = [
          activeMt.key,
          ...this.menuService.findAllParent(this.menuItems, activeMt),
        ];
      }
    }
  }

  changeTheme(mode: 'light' | 'dark' | 'auto') {
    this.mode = mode;
    this.themeModeService.updateTheme(mode);
  }

  //   // Public method to access getActiveClass from the template
  public getActiveClass(key: string): string {
    return this.menuService.getActiveClass(this.activeMenuItems, key);
  }

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
