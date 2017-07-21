import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, RequestMethod, Request, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AdminAccount} from './adminAccount';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { BaseUrl } from "../app.baseUrl";

@Injectable()
export class AdminAccountService {

  private baseUrl = this.serverUrl.url;

  constructor(private http: Http, private serverUrl: BaseUrl) {
  }

  list(): Observable<AdminAccount[]> {
    let subject = new Subject<AdminAccount[]>();
    this.http.get(this.baseUrl + 'adminAccount')
      .map((r: Response) => r.json())
      .subscribe((json: any[]) => {
        subject.next(json.map((item: any) => new AdminAccount(item)))
      });
    return subject.asObservable();
  }

  get(id: number): Observable<AdminAccount> {
    return this.http.get(this.baseUrl + 'adminAccount/'+id)
      .map((r: Response) => new AdminAccount(r.json()));
  }

  save(adminAccount: AdminAccount): Observable<AdminAccount> {
    const requestOptions = new RequestOptions();
    if (adminAccount.id) {
      requestOptions.method = RequestMethod.Put;
      requestOptions.url = this.baseUrl + 'adminAccount/' + adminAccount.id;
    } else {
      requestOptions.method = RequestMethod.Post;
      requestOptions.url = this.baseUrl + 'adminAccount';
    }
    requestOptions.body = JSON.stringify(adminAccount);
    requestOptions.headers = new Headers({"Content-Type": "application/json"});

    return this.http.request(new Request(requestOptions))
      .map((r: Response) => new AdminAccount(r.json()));
  }

  destroy(adminAccount: AdminAccount): Observable<boolean> {
    return this.http.delete(this.baseUrl + 'adminAccount/' + adminAccount.id).map((res: Response) => res.ok).catch(() => {
      return Observable.of(false);
    });
  }
}