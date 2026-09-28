import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Dropdown } from 'bootstrap';

@Directive({
    selector: '[appDropdownHover]',
    standalone: true
})
export class DropdownHoverDirective {
    private dropdownElement!: HTMLElement;
  private mouseEnterListener!: () => void;
  private mouseLeaveListener!: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (window.matchMedia('(min-width: 992px)').matches) {
      this.dropdownElement = this.el.nativeElement;

      // Add event listeners
      this.mouseEnterListener = this.renderer.listen(
        this.dropdownElement,
        'mouseenter',
        () => this.showDropdown()
      );

      this.mouseLeaveListener = this.renderer.listen(
        this.dropdownElement,
        'mouseleave',
        () => this.hideDropdown()
      );
    }
  }

  private showDropdown(): void {
    const toggle = this.dropdownElement.querySelector(
      '[data-bs-toggle="dropdown"]'
    );
    if (toggle && !toggle.classList.contains('show')) {
      new Dropdown(toggle).show();
    }
  }

  private hideDropdown(): void {
    const toggle = this.dropdownElement.querySelector(
      '[data-bs-toggle="dropdown"]'
    );
    if (toggle && toggle.classList.contains('show')) {
      new Dropdown(toggle).hide();
    }
  }

  ngOnDestroy(): void {
    if (this.mouseEnterListener) this.mouseEnterListener();
    if (this.mouseLeaveListener) this.mouseLeaveListener();
  }
}