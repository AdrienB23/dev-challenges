import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {provideRouter, RouterModule, RouterOutlet, withHashLocation} from '@angular/router';
import { routes } from './app-routing.module';
import { NoteCodeComponent } from './components/note-code/note-code.component';
import { HomeComponent } from './components/home/home.component';
import {EditorComponent, provideMonacoEditor} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';
import {OverlayModule} from 'primeng/overlay';
import {Button} from 'primeng/button';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    NoteCodeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    EditorComponent,
    FormsModule,
    OverlayModule,
    Button,
    DropdownModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideRouter(routes, withHashLocation()),
    provideMonacoEditor(),
    provideAnimations(),
  ],
  bootstrap: [AppComponent, NoteCodeComponent]
})
export class AppModule { }
