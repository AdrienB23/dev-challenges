import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-note-code',
  standalone: false,
  templateUrl: './note-code.component.html',
  styleUrl: './note-code.component.css'
})
export class NoteCodeComponent implements OnInit {
  languages = [
    {label: "HTML", value: "html" },
    {label: "CSS", value: "css" },
    {label: "JS", value: "js" },
  ]
  themes = [
    {label: "Light", value: "light"},
    {label: "Dark", value: "dark"}
  ]

  selectedLanguage!: string;

  editorOptions = {
    language: 'html'
  };
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
    this.selectedLanguage = this.languages[0].value;
  }

}
