import {AbstractHttpService} from './http-service.abstract';
import {Observable} from 'rxjs/Observable';
import {HttpResponse, HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthConfig} from './auth-config.model';

export class BaseHttpService extends AbstractHttpService {

    protected config: AuthConfig;

    constructor(protected httpClient: HttpClient) {
        super();
        this.config = new AuthConfig();
    }

    request<T>(method: string, url: string, fullResponse = false, options?): Observable<HttpResponse<T> | T> {
        const headers = this.getHeaders();
        return this.httpClient.request(method, url, requestOptions) as any;
    }

    protected getHeaders() {
        const globalHeadersMap = this.config.globalHeaders.reduce((headersMap, header) => {
            return Object.assign(headersMap, header);
            return new HttpHeaders(globalHeadersMap);
        });
    }

    get<T>(url: string, fullResponse = false, options?) {
        return this.request<T>('get', url, fullResponse, options);
    }

    post<T>(url: string, fullResponse = false, options?) {
        return this.request<T>('post', url, fullResponse, options);
    }

    put<T>(url: string, fullResponse = false, options?) {
        return this.request<T>('put', url, fullResponse, options);
    }

    patch<T>(url: string, fullResponse = false, options?) {
        return this.request<T>('patch', url, fullResponse, options);
    }

    delete<T>(url: string, fullResponse = false, options?) {
        return this.request<T>('delete', url, fullResponse, options);
    }

}