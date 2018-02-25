import {AbstractHttpService} from './http-service.abstract';
import {Observable} from 'rxjs/Observable';
import {HttpResponse, HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthConfig} from './auth-config.model';
import {Injectable} from '@angular/core';

@Injectable()
export class BaseHttpService extends AbstractHttpService {

    protected config: AuthConfig;

    constructor(protected httpClient: HttpClient) {
        super();
        this.config = new AuthConfig();
    }

    request<T>(method: string, url: string, fullResponse = false, options?: any): Observable<HttpResponse<T> | T> {
        const requestOptions = { headers: this.getHeaders() };
        return this.httpClient.request(method, url, requestOptions) as any;
    }

    protected getHeaders() {
        const globalHeadersMap: any = this.config.globalHeaders.reduce((headersMap, header) => {
            return Object.assign(headersMap, header);
        });
        return new HttpHeaders(globalHeadersMap);
    }

  protected getOptionsWithBody(body: any, options?: any) {
    return options ? { ...options, body } : { body };
  }

    get<T>(url: string, fullResponse = false, options?: any) {
        return this.request<T>('get', url, fullResponse, options);
    }

    post<T>(url: string, body: any, fullResponse = false, options?: any) {
        return this.request<T>('post', url, fullResponse, this.getOptionsWithBody(body, options));
    }

    put<T>(url: string, body: any, fullResponse = false, options?: any) {
        return this.request<T>('put', url, fullResponse, this.getOptionsWithBody(body, options));
    }

    patch<T>(url: string, body: any, fullResponse = false, options?: any) {
        return this.request<T>('patch', url, fullResponse, this.getOptionsWithBody(body, options));
    }

    delete<T>(url: string, body: any, fullResponse = false, options?: any) {
        return this.request<T>('delete', url, fullResponse, this.getOptionsWithBody(body, options));
    }

}
