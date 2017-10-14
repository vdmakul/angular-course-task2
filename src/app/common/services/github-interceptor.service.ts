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
      return {value: JSON.stringify(item)};
    });
  }
}
