import {Inject, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {SearchService} from './search.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import {GITHUB_URL_TOKEN} from '../../../conf';

@Injectable()
export class ResultsService {

  private _results$$: Subject<GithubRepo[]> = new Subject<GithubRepo[]>();
  private _searchSubscription: Subscription;
  //todo where to unsubscribe?
  // this._searchSubscription.unsubscribe();


  public constructor(@Inject(GITHUB_URL_TOKEN) private _githubUrl: string,
                     private _searchService: SearchService,
                     private _httpClient: HttpClient) {
    this._searchSubscription =
      this._searchService.onSearch().subscribe((term: string) => this._onNextTerm(term));
  }

  public results(): Observable<GithubRepo[]> {
    return this._results$$.asObservable();
  }

  private _onNextTerm(searchTerm: string): void {
    if (!searchTerm || searchTerm.trim().length === 0) {
      this._results$$.next([]);
      return;
    }

    const url = `${this._githubUrl}?q=${encodeURIComponent(searchTerm)}`;
    this._httpClient.get(url)
      .subscribe((repos: GithubRepo[]) => {
        this._results$$.next(repos);
      });
  }

}
