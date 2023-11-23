import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  setLang(lang: string) {
    document.location.href = document.location.origin + '/' + lang;
  }
}
