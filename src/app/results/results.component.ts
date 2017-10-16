import {Component} from '@angular/core';
import {ResultsService} from '../common/services/results.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  public results$: Observable<GithubRepo[]>;

  constructor(
    private _resultsService: ResultsService
  ) {
    this.results$ = this._resultsService.results$;
  }

}
