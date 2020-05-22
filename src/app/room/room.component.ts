import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppStateModel } from '../shared/app.state';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SetUserRole } from '../shared/app.actions';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  public username;
  @Select(state => state.app) app$: Observable<AppStateModel>;

  constructor(private store: Store) {
  }

  public decideMyFate() {
    this.store.dispatch([
      new SetUserRole()
    ]);
  }

  ngOnInit(): void {
    this.app$
      .pipe(
        tap((res: AppStateModel) => {
          this.username = res.username;
        })
      )
      .subscribe();
  }
}
