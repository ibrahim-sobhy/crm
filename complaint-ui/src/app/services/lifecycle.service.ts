import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LifeCyle } from '../lifecycle';
import { LIFE_CYCLES } from '../mock-lifecyle';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LifecycleService {

  private complaintapi = "http://localhost:8080/complaint/api/";

  constructor(
    private http: HttpClient
  ) { }
  

  getLifeCylces(): Observable<LifeCyle[]> {
    return this.http.get<LifeCyle[]>(this.complaintapi);
  }
}
