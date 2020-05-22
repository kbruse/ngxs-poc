import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ApiService {

  post(): Observable<boolean> {
   return new BehaviorSubject(Math.random() > 0.5).asObservable();
  }
}
