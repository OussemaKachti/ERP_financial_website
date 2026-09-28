import { Directive, ElementRef, Input, OnInit, OnDestroy, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[stickyThing]',
  standalone: true
})
export class StickyThingDirective implements OnInit, OnDestroy {
  @Input() marginTop: number = 0;
  @Input() marginBottom: number = 0;
  @Input() boundary: HTMLElement | null = null;
  @Input() spacer: any = null;
  @Input() enable: boolean = true;
  private isBrowser: boolean;
  private animationFrameId: number | null = null;
  private resizeListener: (() => void) | null = null;
  private naturalTop: number | null = null;
  private placeholder: HTMLElement | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;

    // Create placeholder element to prevent layout collapse
    this.placeholder = this.renderer.createElement('div');
    this.renderer.setStyle(this.placeholder, 'display', 'none');
    this.renderer.insertBefore(element.parentNode, this.placeholder, element);

    const update = () => {
      if (!this.enable) {
        this.resetStyles(element);
        this.animationFrameId = requestAnimationFrame(update);
        return;
      }

      const stickyFor = element.getAttribute('data-sticky-for');
      if (stickyFor) {
        const minWidth = parseInt(stickyFor, 10);
        if (window.innerWidth < minWidth) {
          this.resetStyles(element);
          this.animationFrameId = requestAnimationFrame(update);
          return;
        }
      }

      const parentColumn = element.parentElement;
      if (!parentColumn) {
        this.animationFrameId = requestAnimationFrame(update);
        return;
      }

      const boundaryContainer = this.boundary || parentColumn;
      const boundaryRect = boundaryContainer.getBoundingClientRect();
      const columnRect = parentColumn.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const boundaryHeight = boundaryContainer.offsetHeight;

      const isSticky = element.style.position === 'fixed';
      const isAbsolute = element.style.position === 'absolute';

      if (!isSticky && !isAbsolute) {
        const rect = element.getBoundingClientRect();
        this.naturalTop = rect.top + window.scrollY;
      }

      // Ensure parent column is positioned relatively so absolute positioning works
      this.renderer.setStyle(parentColumn, 'position', 'relative');

      const stickStart = (this.naturalTop || 0) - this.marginTop;
      
      // Calculate bottom limit of boundary relative to parentColumn top
      const boundaryBottomDoc = boundaryRect.top + window.scrollY + boundaryHeight;
      const columnTopDoc = columnRect.top + window.scrollY;
      const maxTopInColumn = boundaryBottomDoc - columnTopDoc - elementHeight;
      const maxScroll = stickStart + maxTopInColumn;

      if (window.scrollY > maxScroll) {
        // Sticky hits the bottom of the boundary container
        this.renderer.setStyle(element, 'position', 'absolute');
        this.renderer.setStyle(element, 'top', `${maxTopInColumn}px`);
        this.renderer.setStyle(element, 'left', 'auto');
        this.renderer.setStyle(element, 'width', '100%');
        this.renderer.setStyle(element, 'bottom', 'auto');
        if (this.placeholder) {
          this.renderer.setStyle(this.placeholder, 'display', 'block');
          this.renderer.setStyle(this.placeholder, 'height', `${elementHeight}px`);
        }
      } else if (window.scrollY > stickStart) {
        // Active sticky: position fixed
        const columnStyle = window.getComputedStyle(parentColumn);
        const paddingLeft = parseFloat(columnStyle.paddingLeft || '0');
        const paddingRight = parseFloat(columnStyle.paddingRight || '0');

        this.renderer.setStyle(element, 'position', 'fixed');
        this.renderer.setStyle(element, 'top', `${this.marginTop}px`);
        this.renderer.setStyle(element, 'left', `${columnRect.left + paddingLeft}px`);
        this.renderer.setStyle(element, 'width', `${columnRect.width - paddingLeft - paddingRight}px`);
        this.renderer.setStyle(element, 'z-index', '100');
        
        if (this.placeholder) {
          this.renderer.setStyle(this.placeholder, 'display', 'block');
          this.renderer.setStyle(this.placeholder, 'height', `${elementHeight}px`);
          this.renderer.setStyle(this.placeholder, 'width', '100%');
        }
      } else {
        // Not sticky
        this.resetStyles(element);
      }

      this.animationFrameId = requestAnimationFrame(update);
    };

    this.animationFrameId = requestAnimationFrame(update);

    this.resizeListener = this.renderer.listen('window', 'resize', () => {
      this.naturalTop = null;
      this.resetStyles(element);
    });
  }

  private resetStyles(element: HTMLElement) {
    this.renderer.setStyle(element, 'position', 'relative');
    this.renderer.setStyle(element, 'top', 'auto');
    this.renderer.setStyle(element, 'left', 'auto');
    this.renderer.setStyle(element, 'width', 'auto');
    this.renderer.setStyle(element, 'transform', 'none');
    if (this.placeholder) {
      this.renderer.setStyle(this.placeholder, 'display', 'none');
    }
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeListener) {
      this.resizeListener();
    }
  }
}
