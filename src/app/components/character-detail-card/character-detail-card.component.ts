import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-detail-card',
  templateUrl: './character-detail-card.component.html',
  styleUrl: './character-detail-card.component.css',
})
export class CharacterDetailCardComponent {
  @Input() characterDetails: any;
}
