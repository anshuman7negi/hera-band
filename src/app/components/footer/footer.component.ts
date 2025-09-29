import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Hera Band</h3>
            <p>Premier wedding and event band serving Ramnagar, Jim Corbett, Nainital, and across Uttarakhand.</p>
            <div class="social-links">
              <a href="https://facebook.com/heraband" target="_blank" aria-label="Facebook">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com/heraband" target="_blank" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a routerLink="/home">Home</a></li>
              <li><a routerLink="/about">About</a></li>
              <li><a routerLink="/services">Services</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>Ghori</li>
              <li>Baggi</li>
              <li>Dhol</li>
              <li>Band & Shehnai</li>
              <li>Flower Chhatar</li>
              <li>Lights & Decoration</li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <p><i class="fas fa-map-marker-alt"></i> Ramnagar, Uttarakhand, India</p>
              <p><i class="fas fa-phone"></i> <a href="tel:+919876543210">+91 98765 43210</a></p>
              <p><i class="fas fa-envelope"></i> <a href="mailto:info@heraband.com">info@heraband.com</a></p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Hera Band. All rights reserved. | Wedding & Event Band in Uttarakhand</p>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent { }