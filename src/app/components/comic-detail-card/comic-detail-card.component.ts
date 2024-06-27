import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comic-detail-card',
  templateUrl: './comic-detail-card.component.html',
  styleUrl: './comic-detail-card.component.css'
})
export class ComicDetailCardComponent {
  @Input() comicDetails!: any;
}
