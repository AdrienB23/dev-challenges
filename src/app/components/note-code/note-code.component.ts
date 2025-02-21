import {Component, OnInit} from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-note-code',
  standalone: false,
  templateUrl: './note-code.component.html',
  styleUrl: './note-code.component.css'
})
export class NoteCodeComponent implements OnInit {
  editor: any;

  languages = [
    {label: "HTML", value: "html" },
    {label: "CSS", value: "css" },
    {label: "JS", value: "javascript" },
    {label: "TS", value: "typescript" },
    {label: "JSON", value: "json" },
  ]
  themes = [
    {label: "Light", value: "vs"},
    {label: "VS Dark", value: "vs-dark"},
    {label: "HC Black", value: "hc-black"},
    {label: "HC Light", value: "hc-light"},
  ]

  selectedLanguage = this.languages[0];
  selectedTheme = this.themes[0];

  overlaysVisibility = {
    language: false,
    theme: false,
  }

  editorOptions = {
    language: this.selectedLanguage.value,
    theme: this.selectedTheme.value,
  };

  shared=false;

  code = `<html lang="en">
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`;

  ngOnInit() {
    monaco.editor.setTheme(this.selectedTheme.value);
  }

  onEditorInit(editorInstance: any) {
    this.editor = editorInstance;
  }

  toggle(type: string) {
    if (type === "language") {
      this.overlaysVisibility.language = true;
    }
    else if (type === "theme") {
      this.overlaysVisibility.theme = true;
    }
    console.log(this.overlaysVisibility);
  }

  shareCode() {
    this.shared = true;
  }

  updateTheme(theme: string) {
    this.selectedTheme = this.themes.find(t => t.value === theme) || this.themes[0];
    if (this.editor) {
      this.editor.updateOptions({ theme }); // Met à jour le thème dynamiquement
    }
  }
}
