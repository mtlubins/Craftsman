import {IHttpService} from './http-service.interface';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthConfig} from './auth-config.model';
import {Injectable} from '@angular/core';

@Injectable()
export class BaseHttpService implements IHttpService {

    protected config: AuthConfig;

    constructor(protected httpClient: HttpClient) {
        this.config = new AuthConfig();
    }

    request<T>(method: string, url: string, body?: any): Observable<T> {
      const headers = this.getHeaders();
      return this.httpClient.request<T>(method, url, {body: body, headers: headers, observe: 'body'});
    }

    protected getHeaders() {
        const globalHeadersMap: any = this.config.globalHeaders.reduce((headersMap, header) => {
            return Object.assign(headersMap, header);
        });
        return new HttpHeaders(globalHeadersMap);
    }


    get<T>(url: string): Observable<T> {
        return this.request<T>('get', url);
    }

    post<T>(url: string, body: any) {
        return this.request<T>('post', url, body);
    }

    put<T>(url: string, body: any) {
        return this.request<T>('put', url, body);
    }

    patch<T>(url: string, body: any) {
        return this.request<T>('patch', url, body);
    }

    delete<T>(url: string, body: any) {
        return this.request<T>('delete', url, body);
    }

}
