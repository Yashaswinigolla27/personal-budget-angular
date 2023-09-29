// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchDataFromBackend();
  }

  private fetchDataFromBackend() {
    // Replace 'your-backend-url' with the actual URL of your backend API
    this.http.get('your-backend-url').subscribe((data) => {
      this.dataSubject.next(data);
    });
  }
}

