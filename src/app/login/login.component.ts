import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { SetUsername } from '../shared/app.actions';
import { Navigate } from '../shared/router.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  @Select(state => state.app) app$; // by convention the library will automatically look for property with name app minus the dollar sign
  // state$: Observable<AppState>;  // replaced by select decorator

  constructor(private store: Store) {
    // this.state$ = this.store.select(state => state.app); // replaced by select decorator
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    const username = this.loginForm.value.username;
    this.store.dispatch([
      new SetUsername(username),
      new Navigate('room') // lazy loaded module
    ]);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required])
    });
  }

}
