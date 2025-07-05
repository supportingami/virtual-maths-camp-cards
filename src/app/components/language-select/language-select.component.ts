import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'language-select',
  templateUrl: 'language-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class LanguageSelectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
