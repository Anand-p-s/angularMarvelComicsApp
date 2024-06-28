import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrl: './loader-spinner.component.css',
})
export class LoaderSpinnerComponent {
  isLoading: Subject<boolean> = this.loader.isLoading;

  constructor(private loader: LoaderService) {}
}
