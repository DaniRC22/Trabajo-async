import { Injectable } from '@angular/core';
import { Observable, interval, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDateService {

  constructor() { }

  public getFecha(): Observable<Date> {
    return interval(1000).pipe(map(_ => new Date()));
  }
  }

