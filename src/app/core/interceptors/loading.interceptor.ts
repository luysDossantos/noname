import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../service/loagind.service';
import { finalize } from 'rxjs';

const excludedUrls: string[] = ['/api/excluded-endpoint'];

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService)
  if (!excludedUrls.some(url => req.url.includes(url))) {
    loadingService.showLoading(req.url);
  }

  return next(req).pipe(
    finalize(() => {
      loadingService.hideLoading(req.url);
    })
  );
};
