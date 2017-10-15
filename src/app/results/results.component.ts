import {Component, OnInit} from '@angular/core';
import {ResultsService} from '../common/services/results.service';
import {Observable} from 'rxjs/Observable';
import {SearchService} from '../common/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public results: GithubRepo[] = [];
  public searching: boolean;

  constructor(
    private _searchService: SearchService,
    private _resultsService: ResultsService
  ) { }

  public ngOnInit() {
    this._searchService.onSearch().subscribe((term: string) => this.searching = true);
    this._resultsService.results().subscribe((foundRepos: Observable<GithubRepo>) => {
      this.results = [];
      foundRepos.subscribe((repo: GithubRepo) => {
        this.results.push(repo)
        this.searching = false;
      });
    });
  }

}
