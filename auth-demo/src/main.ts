import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'balayokesh.eu.auth0.com',
      clientId: 'pgufVUEK3Ln0W7oYMvTKMlH9U7J9KEAi',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
});
