import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  imports: [Header,Footer],
  selector: 'app-recipes',
  styleUrl: './recipes.css',
  templateUrl: './recipes.html',
})
export class Recipes {}
