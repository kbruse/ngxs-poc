import { State, Action, StateContext } from '@ngxs/store';
import { SetUserRole, SetUsername, SetUserMember, SetUserGuest } from './app.actions';
import { tap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { Injectable } from '@angular/core';
import { Navigate } from './router.state';


export interface AppStateModel {
  username: string;
  id: number;
  status?: 'guest' | 'member' | 'pending';
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    username: '',
    id: Math.floor(Math.random() * 100000)
  }
}) // replaces reducer in ngrx
@Injectable()
export class AppState {

  constructor(private readonly apiService: ApiService) {
  }

  @Action(SetUsername)
  setUserName({ patchState }: StateContext<AppStateModel>, { payload }: SetUsername) {
    patchState({ username: payload });
  }

  @Action(SetUserRole, { cancelUncompleted: true })
  setUserRole({ dispatch, patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'pending' });
    return this.apiService.post().pipe(
      tap(success => (success ? dispatch(SetUserMember) : dispatch(SetUserGuest)))
    );
  }

  @Action(SetUserMember)
  setUserMember({ dispatch, patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'member' });
    return dispatch([
      new Navigate('room/szafa')
    ]);
  }

  @Action(SetUserGuest)
  setUserGuest({ dispatch, patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'guest' });
    return dispatch([
      new Navigate('room/lawka')
    ]);
  }
}
