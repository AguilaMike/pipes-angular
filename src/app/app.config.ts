import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// Configuration locale language for the app
import localeEsMX from '@angular/common/locales/es-MX';
import localeFrCA from '@angular/common/locales/fr-CA';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsMX, 'es-MX');
registerLocaleData(localeFrCA, 'fr-CA');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' },
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes, withViewTransitions()),
  ]
};

