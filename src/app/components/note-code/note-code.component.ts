import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-note-code',
  standalone: false,
  templateUrl: './note-code.component.html',
  styleUrls: ['./note-code.component.css']
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
  id="";
  copySuccess = false;

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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let paramId = params.get('id');
      if (paramId) {
        this.id = paramId
        this.loadCode(this.id);
      }
    });
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
  }

  shareCode() {
    this.id = this.generateRandomId();
    this.saveCode(this.id, this.code);
    this.router.navigate(['home/note-code', this.id]);
    this.shared = true;
  }

  saveCode(id: string, code: string) {
    localStorage.setItem(`code_${id}`, code);
    localStorage.setItem(`language_${id}`, this.selectedLanguage.value);
    localStorage.setItem(`theme_${id}`, this.selectedTheme.value);
  }

  loadCode(id: string) {
    const savedCode = localStorage.getItem(`code_${id}`);
    const savedLanguage = localStorage.getItem(`language_${id}`);
    const savedTheme = localStorage.getItem(`theme_${id}`);
    if (savedCode && savedLanguage && savedTheme) {
      this.code = savedCode;
      this.update('language', savedLanguage);
      this.update('theme', savedTheme);
      this.shared = true;
    }
  }

  update(type: string, value: string) {
    if (type === 'language') {
      this.selectedLanguage = this.languages.find(t => t.value === value) || this.languages[0];
      this.overlaysVisibility.language = false;
    }
    else if (type === 'theme') {
      this.selectedTheme = this.themes.find(t => t.value === value) || this.themes[0];
      this.overlaysVisibility.theme = false;
    }
    this.editorOptions = {
      language: this.selectedLanguage.value,
      theme: this.selectedTheme.value,
    };
  }

  generateRandomId(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const array = new Uint8Array(10);
    crypto.getRandomValues(array);
    return Array.from(array, (byte) => chars[byte % chars.length]).join('');
  }

  copyToClipboard() {
    const baseUrl = window.location.origin.includes("github.io")
      ? `${window.location.origin}/dev-challenges`
      : window.location.origin;
    const url = `${baseUrl}/#/home/note-code/${this.id}`;
    navigator.clipboard.writeText(url).then(() => {
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2000);
    }).catch(err => console.error('Erreur de copie :', err));
  }

  updateCode() {
    this.shared = false;
  }
}
