import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function apiInseeInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const AUTHORISATION_TOKEN = 'e7850fae-7011-3f3e-8443-853fee5c49f5';

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${AUTHORISATION_TOKEN}`,
    },
  });
  return next(clonedRequest);
}
