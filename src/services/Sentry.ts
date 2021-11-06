import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

export function initSentry(): void {
  Sentry.init({
    dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
    debug: process.env.REACT_APP_ENV_NAME !== 'production',
    environment: process.env.REACT_APP_ENV_NAME,
  });
}

export default initSentry;
