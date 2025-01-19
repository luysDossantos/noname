import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  private requests: Set<string> = new Set();

  showLoading(url: string) {
    this.requests.add(url);
    this.loadingSubject.next(true);
  }

  hideLoading(url: string) {
    this.requests.delete(url);
    if (this.requests.size === 0) {
      this.loadingSubject.next(false);
    }
  }

}
