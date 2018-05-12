import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LifeCycle } from '../lifecycle';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LifecycleService {

  private complaintapi = "api/lifecycles";

  constructor(
    private http: HttpClient
  ) { }
  

  getLifeCylces(): Observable<LifeCycle[]> {
    return this.http.get<LifeCycle[]>(this.complaintapi);
  }

}
