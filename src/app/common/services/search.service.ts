import {Inject, Injectable} from '@angular/core';
import {GITHUB_URL_TOKEN} from '../../../conf';

@Injectable()
  export class SearchService {

  public constructor(
    @Inject(GITHUB_URL_TOKEN) private _githubUrl: string,
  ) { }

  public test(): string {
    return this._githubUrl;
  }
}
