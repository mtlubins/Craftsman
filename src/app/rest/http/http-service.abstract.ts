import {Observable} from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';


export abstract class AbstractHttpService {
    abstract request<T>(method: string, url: string, fullResponse?: boolean, options?): Observable<HttpResponse<T> | T>;
    abstract get<T>(url: string, fullResponse?: boolean, options?): Observable<HttpResponse<T> | T>;
    abstract post<T>(url: string, body: any, fullResponse?: boolean, options?): Observable<HttpResponse<T> | T>;
    abstract put<T>(url: string, body: any, fullResponse?: boolean, options?): Observable<HttpResponse<T> | T>;
    abstract patch<T>(url: string, body: any, fullResponse?: boolean, options?): Observable<HttpResponse<T> | T>;
    abstract delete<T>(url: string, body: any, fullResponse?: boolean, options?): Observable<HttpResponse<T> | T>;
}
