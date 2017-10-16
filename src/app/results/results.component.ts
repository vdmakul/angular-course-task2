import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SearchService} from '../common/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  public results$: Observable<GithubRepo[]>;

  constructor(
    private _searchService: SearchService
  ) {
    this.results$ = this._searchService.results$;
  }

}
