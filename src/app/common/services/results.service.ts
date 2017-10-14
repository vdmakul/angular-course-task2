import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {SearchService} from './search.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class ResultsService {

  private _results$$: Subject<Observable<GithubRepo>> = new Subject<Observable<GithubRepo>>();
  private _searchSubscription: Subscription;
  //todo where to unsubscribe?
  // this._searchSubscription.unsubscribe();


  public constructor(private _searchService: SearchService) {
    this._searchSubscription =
      this._searchService.onSearch().subscribe((term: string) => this._onNextTerm(term));
  }

  public results(): Observable<Observable<GithubRepo>> {
    return this._results$$.asObservable();
  }

  private _onNextTerm(searchTerm: string): void {
    const repos$: Observable<GithubRepo> = Observable.of(
      {value: `result 1 for ${searchTerm}`},
      {value: `result 2 for ${searchTerm}`}
    );
    this._results$$.next(repos$);
  }

}
