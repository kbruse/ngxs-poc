import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Navigate } from '../../shared/router.state';
import { Observable, Subscription } from 'rxjs';
import { AppStateModel } from '../../shared/app.state';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-lawka',
  templateUrl: './lawka.component.html',
  styleUrls: ['./lawka.component.scss']
})
export class LawkaComponent implements OnInit, OnDestroy {

  public username;
  public userId;
  private subscription$ = new Subscription();
  @Select() app$: Observable<AppStateModel>;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.subscription$ = this.app$
      .pipe(
        tap((res: AppStateModel) => {
          this.username = res.username;
          this.userId = res.id;
        })
      )
      .subscribe();
  }

  public goToSzafa(): void {
    this.store.dispatch([
      new Navigate('room/szafa')
    ]);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
