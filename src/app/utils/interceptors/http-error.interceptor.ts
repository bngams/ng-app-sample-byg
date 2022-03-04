import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, retry, retryWhen, tap, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // ...
    return next.handle(request).pipe(
      // retry(1) // just to show retry operator - not recommanded
      // tap({
      //   next: (e: any) => console.log('no error'),
      //   err: error => console.log('error')
      // })
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      const msg = `Backend returned code ${error.status}, body was: `;
      console.error(msg, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => {
      // simulate snack bar or other
      const msg = 'Something bad happened; please try again later.';
      window.alert(msg);
      new Error('Something bad happened; please try again later.')
    });
  }
}

export const HTTP_ERROR_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true
}
