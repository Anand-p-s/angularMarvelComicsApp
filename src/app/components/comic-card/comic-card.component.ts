import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrl: './comic-card.component.css'
})
export class ComicCardComponent {
  @Input() comic: any;
}
