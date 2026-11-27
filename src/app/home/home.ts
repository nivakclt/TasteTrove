import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
@Component({
  imports: [Header,Footer],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
