import {Component, OnInit} from '@angular/core';
import {ResultsService} from '../common/services/results.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public results: GithubRepo[] = [];

  constructor(
    private _resultsService: ResultsService
  ) { }

  public ngOnInit() {
    this._resultsService.results().subscribe((foundRepos: Observable<GithubRepo>) => {
      this.results = [];
      foundRepos.subscribe((repo: GithubRepo) => this.results.push(repo));
    });
  }

}
