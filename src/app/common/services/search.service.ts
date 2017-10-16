import {Inject, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {GITHUB_URL_TOKEN} from '../../../conf';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/switchMap';

@Injectable()
  export class SearchService {

  private _searchTerms$$: Subject<string> = new Subject<string>();
  public results$: Observable<GithubRepo[]>;

  constructor(
    @Inject(GITHUB_URL_TOKEN) private _githubUrl: string,
    private _httpClient: HttpClient) {
    this.results$ = this._searchTerms$$.asObservable()
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((term: string) => this._getSearchResults(term));
  }

  public search(searchTerm: string): void {
    this._searchTerms$$.next(searchTerm);
  }

  private _getSearchResults(searchTerm: string): Observable<GithubRepo[]> {
    if (!searchTerm || searchTerm.trim().length === 0) {
      return Observable.of([]);
    }
    const url = `${this._githubUrl}?q=${encodeURIComponent(searchTerm)}`;
    return this._httpClient.get(url);
  }
}
