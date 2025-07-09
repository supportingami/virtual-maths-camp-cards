import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { LanguageSelectComponent } from './components/language-select/language-select.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LanguageSelectComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'VMC Cards';
  public currentYear = new Date().getFullYear();
}
