import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="container">
          <h1>About Hera Band</h1>
          <p>Our passion lies in transforming weddings into cherished memories—filled with rhythm, energy, and vibrant cultural touch. With Hera Band, your event is not just organized; it’s celebrated with heart, music, and tradition. Because every wedding deserves the magic of Hera Band.</p>
        </div>
      </section>
 
      <!-- About Content -->
      <section class="about-content">
        <div class="container">
          <div class="about-grid">
            <div class="about-text">
              <h2>Our Story</h2>
              <p>
                Hera Band has been the heart of wedding celebrations across Uttarakhand for over a decade. 
                Founded with a passion for traditional Indian music and cultural celebrations, we have grown 
                to become one of the most trusted names in wedding entertainment in the region.
              </p>
              <p>
                Our journey began in the beautiful hill station of Ramnagar, nestled in the foothills of the 
                Himalayas. From there, we expanded our services to cover the entire Jim Corbett area, the 
                scenic Nainital region, and across Uttarakhand, bringing joy and music to countless families.
              </p>
              <p>
                With our deep understanding of Indian wedding traditions and modern celebration styles, 
                we create memorable experiences that honor the past while embracing the present.
              </p>
            </div>
            <div class="about-image">
              <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" alt="Hera Band Team" />
            </div>
          </div>
        </div>
      </section>

      <!-- Service Areas -->
      <section class="service-areas">
        <div class="container">
          <h2>Our Service Areas</h2>
          <div class="areas-grid">
            <div class="area-card">
              <h3>Ramnagar</h3>
              <p>Our home base, where we started our journey of creating magical wedding moments.</p>
            </div>
            <div class="area-card">
              <h3>Jim Corbett</h3>
              <p>Serving the beautiful Jim Corbett National Park region with traditional celebrations.</p>
            </div>
            <div class="area-card">
              <h3>Nainital</h3>
              <p>Bringing music to the lake city and surrounding hill station areas.</p>
            </div>
            <div class="area-card">
              <h3>Across Uttarakhand</h3>
              <p>Extending our services throughout the Dev Bhoomi for all your celebration needs.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="why-choose-us">
        <div class="container">
          <h2>Why Choose Hera Band?</h2>
          <div class="features-grid">
            <div class="feature" *ngFor="let feature of features">
              <div class="feature-icon">
                <i [class]="feature.icon"></i>
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Values -->
      <section class="team-values">
        <div class="container">
          <h2>Our Values</h2>
          <div class="values-content">
            <div class="value-item">
              <h3>Authenticity</h3>
              <p>We preserve and celebrate traditional Indian wedding customs with genuine respect and understanding.</p>
            </div>
            <div class="value-item">
              <h3>Excellence</h3>
              <p>Every performance is delivered with the highest standards of musical quality and professionalism.</p>
            </div>
            <div class="value-item">
              <h3>Joy</h3>
              <p>Our ultimate goal is to create moments of pure happiness and celebration for you and your guests.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  
  features = [
    {
      icon: 'fas fa-music',
      title: 'Expert Musicians',
      description: 'Professional artists with years of experience in traditional Indian wedding music'
    },
    {
      icon: 'fas fa-heart',
      title: 'Personalized Service',
      description: 'We work closely with families to understand their specific needs and preferences'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Local Expertise',
      description: 'Deep knowledge of Uttarakhand traditions and customs across all regions'
    },
    {
      icon: 'fas fa-star',
      title: 'Quality Equipment',
      description: 'Professional-grade instruments and sound equipment for the best experience'
    },
    {
      icon: 'fas fa-clock',
      title: 'Reliable Service',
      description: 'Punctual, dependable service that you can count on for your special day'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Fair Pricing',
      description: 'Transparent, competitive pricing with no hidden costs or surprises'
    }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'About Hera Band - Traditional Wedding Band in Uttarakhand | Our Story',
      description: 'Learn about Hera Band\'s journey serving Ramnagar, Jim Corbett, Nainital. Expert wedding musicians bringing authentic celebrations across Uttarakhand for over a decade.',
      keywords: 'Hera Band history, wedding band Uttarakhand, traditional music Ramnagar, Jim Corbett wedding services, Nainital event band, Uttarakhand celebration experts'
    });
  }
}