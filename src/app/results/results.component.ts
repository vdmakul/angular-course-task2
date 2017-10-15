import {Component, OnInit} from '@angular/core';
import {ResultsService} from '../common/services/results.service';

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
    this._resultsService.results$.subscribe((foundRepos: GithubRepo[]) => {
      this.results = foundRepos;
    });
  }

}
