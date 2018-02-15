import { AbstractHttpService } from './http-service.abstract';
import { Observable } from 'rxjs/Observable';
import { HttpResponse, HttpClient  } from '@angular/common/http';

export class BaseHttpService extends AbstractHttpService {

    constructor(private httpClient: HttpClient) {
        super();
    }

    request<T>(method: string, url: string, fullResponse = false, options?): Observable<HttpResponse<T> | T> {
        return this.httpClient.request(method, url, requestOptions) as any;
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