import {Component, OnInit} from '@angular/core';
import { routes } from '../../app-routing.module';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(url: string) {
    this.router.navigateByUrl('home/' + url);
  }
}
