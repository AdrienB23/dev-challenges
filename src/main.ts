import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import * as monaco from 'monaco-editor';

(self as any).MonacoEnvironment = {
  getWorkerUrl: function (moduleId: string, label: string) {
    return `assets/monaco/min/vs/language/${label}/${label}Worker.js`;
  }
};

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

