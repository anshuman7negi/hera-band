import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="nav-brand">
          <h1>HEERA BAND</h1>
          <span>Wedding & Event Specialists</span>
        </div>
        
        <nav class="nav-menu" [class.active]="isMenuOpen">
          <a routerLink="/home" routerLinkActive="active" (click)="closeMenu()">Home</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
          <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a>
           <a routerLink="/gallery" routerLinkActive="active" (click)="closeMenu()">Gallery</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
        </nav>
        
        <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}