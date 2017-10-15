import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubInterceptorService implements HttpInterceptor {


  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .map((res: HttpEvent<any>) => {
        if (res instanceof HttpResponse) {
          return res.clone({body: this._convert(res.body.items)});
        }
        return Observable.of(res);

      }).catch((err: HttpErrorResponse) => {
        return Observable.throw(err);
      });
  }

  private _convert(items: any[]): GithubRepo[] {
    return items.map((item: any) => {
      return {
        name: item.name,
        full_name: item.full_name,
        owner_login: item.owner.login,
        owner_avatar_url: item.owner.avatar_url,
        html_url: item.html_url,
        description: item.description,
        stargazers_count: item.stargazers_count,
        forks_count: item.forks_count,
        watchers_count: item.watchers_count,
        score: item.score
      };
    });
  }
}
