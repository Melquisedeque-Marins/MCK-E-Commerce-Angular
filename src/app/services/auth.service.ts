import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.getIsLogged())
  userName:string = '';
  private userNameSubject: BehaviorSubject<string> = new BehaviorSubject('');
  returnUrl: string = '';

  constructor(
    private oauthService:OAuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) 
   { this.configure();}

  
  authConfig: AuthConfig = {
    issuer: 'http://localhost:8088/realms/mck-e-commerce',
    redirectUri: window.location.origin ,
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
        this.userNameSubject.next(this.getUserName());
      }
    });
  }

  login(): void {
    this.oauthService.initCodeFlow();
    this.isLoggedSubject.next(this.getIsLogged());
  }

  logout(): void {
    this.oauthService.logOut();
    this.isLoggedSubject.next(this.getIsLogged());
    this.userNameSubject.next('');

  }

  public getIsLogged(): boolean {
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getIsAdmin() : boolean {
    const token = this.oauthService.getAccessToken();
    const payloadDecoded = JSON.parse(atob(token.split('.')[1]));
    return payloadDecoded.realm_access.roles.indexOf('app-admin') !== -1;
  }

  public getUserName() : string {
    return this.oauthService.getIdentityClaims()['preferred_username'];
  }

  getIsLoggedObsarvable(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  getUserNameObsarvable(): Observable<string> {
    return this.userNameSubject.asObservable();
  }

}
