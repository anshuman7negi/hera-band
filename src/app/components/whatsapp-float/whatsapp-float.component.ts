import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="whatsapp-float">
      <a href="https://wa.me/919876543210?text=Hello%20Hera%20Band!%20I'm%20interested%20in%20your%20wedding%20services." 
         target="_blank" 
         class="whatsapp-btn"
         aria-label="Contact us on WhatsApp">
        <i class="fab fa-whatsapp"></i>
        <span class="tooltip">Chat with us!</span>
      </a>
    </div>
  `,
  styleUrl: './whatsapp-float.component.css'
})
export class WhatsAppFloatComponent { }