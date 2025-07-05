import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  imports: [MatToolbar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  route = inject(ActivatedRoute);
  cards = this.route.snapshot.data['cards'];
}
