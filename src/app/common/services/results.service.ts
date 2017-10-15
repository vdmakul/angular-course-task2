import {Inject, Injectable} from '@angular/core';
import {SearchService} from './search.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import {GITHUB_URL_TOKEN} from '../../../conf';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ResultsService {

  public results$: Observable<GithubRepo[]>;

  public constructor(@Inject(GITHUB_URL_TOKEN) private _githubUrl: string,
                     private _searchService: SearchService,
                     private _httpClient: HttpClient) {
    this.results$ = this._searchService.onSearch()
      .switchMap((term: string) => this._getSearchResults(term));
  }

  private _getSearchResults(searchTerm: string): Observable<GithubRepo[]> {
    if (!searchTerm || searchTerm.trim().length === 0) {
      return Observable.of([]);
    }
    const url = `${this._githubUrl}?q=${encodeURIComponent(searchTerm)}`;
    return this._httpClient.get(url);
  }

}
