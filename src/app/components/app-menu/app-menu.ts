import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './app-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class AppMenu{
  @Input() resourcesMenu: boolean = false
  @Input() megaMenu: boolean = false
  @Input() ulClassName: string = ''
}
