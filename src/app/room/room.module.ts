import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { SzafaComponent } from './szafa/szafa.component';
import { LawkaComponent } from './lawka/lawka.component';
import { AppState } from '../shared/app.state';


const routes: Routes = [
  { path: '', component: RoomComponent },
  { path: 'szafa', component: SzafaComponent },
  { path: 'lawka', component: LawkaComponent }
];

@NgModule({
  declarations: [
    RoomComponent,
    SzafaComponent,
    LawkaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([AppState])
  ]
})
export class RoomModule { }
