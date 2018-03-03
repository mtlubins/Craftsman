import {Observable} from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';


export interface HttpServiceInterface {
    request<T>(method: string, url: string, fullResponse?: boolean, options?: any): Observable<HttpResponse<T> | T>;
    get<T>(url: string, fullResponse?: boolean, options?: any): Observable<HttpResponse<T> | T>;
    post<T>(url: string, body: any, fullResponse?: boolean, options?: any): Observable<HttpResponse<T> | T>;
    put<T>(url: string, body: any, fullResponse?: boolean, options?: any): Observable<HttpResponse<T> | T>;
    patch<T>(url: string, body: any, fullResponse?: boolean, options?: any): Observable<HttpResponse<T> | T>;
    delete<T>(url: string, body: any, fullResponse?: boolean, options?: any): Observable<HttpResponse<T> | T>;
}
