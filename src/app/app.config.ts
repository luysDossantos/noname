import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { CustomPrimeNgPreset } from './custom-primeng-preset';
import { ApiModule, Configuration } from './features-modules/gestao-de-concurso/api';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export function apiConfigFactory() {
  return new Configuration({
    basePath: 'https://concurso-api.onrender.com/concurso',
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([loadingInterceptor]),
    ),
    ...(ApiModule.forRoot(apiConfigFactory).providers || []),
    providePrimeNG({
      theme: {
        preset: CustomPrimeNgPreset,
      },
    }),
  ]
};
