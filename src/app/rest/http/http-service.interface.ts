import {Observable} from 'rxjs/Observable';

export interface IHttpService {
    request<T>(method: string, url: string, body?: any): Observable<T>;
    get<T>(url: string): Observable<T>;
    post<T>(url: string, body: any): Observable<T>;
    put<T>(url: string, body: any): Observable<T>;
    patch<T>(url: string, body: any): Observable<T>;
    delete<T>(url: string, body: any): Observable<T>;
}
