import { Component, ChangeDetectionStrategy } from '@angular/core';
import { serviceData } from '../../data';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'software-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Service {
  serviceData = serviceData

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.serviceData.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
