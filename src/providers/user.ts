// import 'rxjs/add/operator/toPromise';

import { Injectable, Injector } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Api } from './api';
import { Router } from '@angular/router';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like 'id', 'name', 'email', etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  // _user: any;

  constructor(
    public api: Api,
    private injector: Injector,
    private storage: Storage
  ) {}

  login(accountInfo: any): any {
    return this.api.get('account/login', accountInfo);
  }

  logout(): any {
    // let seq = this.api.post('account/logout', null).subscribe(
    //   (res: any) => {
        // this.storage.remove('TOKEN').then(res => {
        //   this._user = null;
        // });
        window.localStorage.removeItem('TOKEN');
        this.storage.clear();
        setTimeout(() => this.injector.get(Router).navigateByUrl('/login'));
    //   },
    //   (err) => {
    //     console.error('ERROR', err);
    //   }
    // );
    // return seq;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    // this.storage.set('TOKEN', `${resp.token_type} ${resp.access_token}`).then();
    window.localStorage.setItem(
      'TOKEN',
      `${resp.token_type} ${resp.access_token}`
    );
    this.storage.set('USER_INFO', resp.user_name).then();
    // this._user = resp;
  }
}
