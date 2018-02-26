import { Component, OnInit } from '@angular/core';
import { SerachService } from '../serach.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-qaq',
  templateUrl: './qaq.component.html',
  styleUrls: ['./qaq.component.css'],
  providers: [SerachService],
})
export class QaqComponent implements OnInit {
  results: Object;
  price: 100;
  searchTerm$ = new Subject<string>();
  constructor(private search: SerachService) {
    this.search.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }

  ngOnInit() {
  }

}
