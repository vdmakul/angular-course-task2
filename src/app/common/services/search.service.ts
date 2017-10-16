import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
  export class SearchService {

  private _searchTerms$$: Subject<string> = new Subject<string>();

  public search(searchTerm: string): void {
    this._searchTerms$$.next(searchTerm);
  }

  public get search$(): Observable<string> {
    return this._searchTerms$$.asObservable()
      .debounceTime(500)
      .distinctUntilChanged();
  }
}
