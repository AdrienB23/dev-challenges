import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NoteCodeComponent} from './components/note-code/note-code.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'home',
    title: 'Challenges | Home',
    component: HomeComponent
  },
  {
    path: 'home/note-code',
    title: 'Note Code',
    component: NoteCodeComponent,
  },
  {
    path: 'home/note-code/:id',
    title: 'Note Code',
    component: NoteCodeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
