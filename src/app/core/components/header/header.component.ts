import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[appHeader]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
