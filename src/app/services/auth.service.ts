import { Injectable } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor(private oauthService:OAuthService) { 
    this.configure();
  }

  
  authConfig: AuthConfig = {
    issuer: 'http://localhost:8088/realms/mck-e-commerce',
    redirectUri: window.location.origin,
    clientId: 'mck-e-commerce-frontend',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };

  configure(): void {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin())
    .then(() => {
      if (this.oauthService.getIdentityClaims()) {
        this.isLoggedSubject.next(this.getIsLogged());
      }
    });
  }

  login(): void {
    this.oauthService.initImplicitFlowInternal();
    this.isLoggedSubject.next(this.getIsLogged());
  }

  logout(): void {
    this.oauthService.logOut();
    this.isLoggedSubject.next(this.getIsLogged());
  }

  public getIsLogged(): boolean {
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getIsAdmin() : boolean {
    const token = this.oauthService.getAccessToken();
    const payloadDecoded = JSON.parse(atob(token.split('.')[1]));
    return payloadDecoded.realm_access.roles.indexOf('app-admin') !== -1;
  }

  getIsLoggedObsarvable(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }
}
