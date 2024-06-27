import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrl: './comics-details.component.css',
})
export class ComicsDetailsComponent implements OnInit {
  comicId!: number;
  comicDetails!: any;

  constructor(private route: ActivatedRoute, private db: DbService) {}

  ngOnInit(): void {
    this.comicId = this.route.snapshot.params['comicId'];

    this.db.getComicById(this.comicId).subscribe((result) => {
      this.comicDetails = result.data.results[0];
      console.log(this.comicDetails);
      
    });
  }
}
