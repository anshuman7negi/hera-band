import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="services">
      <!-- Hero Section -->
      <section class="services-hero">
        <div class="container">
          <h1>Our Services</h1>
          <p>From the soulful notes of Shehnai to the energetic beats of Dhol, our team specializes in creating unforgettable moments for your big day. Whether it’s a traditional Ghori procession, a royal Baggi entry, or mesmerizing flower and light decorations, we ensure your celebration is nothing short of spectacular.</p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="services-content">
        <div class="container">
          <div class="services-grid">
            <div class="service-card" *ngFor="let service of services">
              <div class="service-image">
                <img [src]="service.image" [alt]="service.name" />
              </div>
              <div class="service-content">
                <h3>{{ service.name }}</h3>
                <p>{{ service.description }}</p>
                <ul class="service-features">
                  <li *ngFor="let feature of service.features">{{ feature }}</li>
                </ul>
                <button class="know-more-btn" (click)="contactUs()">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Areas -->
      <section class="service-areas">
        <div class="container">
          <h2>We Serve Across Uttarakhand</h2>
          <div class="areas-list">
            <div class="area-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Ramnagar & Surroundings</span>
            </div>
            <div class="area-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Jim Corbett National Park Area</span>
            </div>
            <div class="area-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Nainital & Lake District</span>
            </div>
            <div class="area-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Almora & Kumaon Region</span>
            </div>
            <div class="area-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Dehradun & Surrounding Areas</span>
            </div>
            <div class="area-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Haridwar & Rishikesh</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Info -->
      <section class="pricing-info">
        <div class="container">
          <h2>Pricing & Packages</h2>
          <div class="pricing-content">
            <p>We offer flexible pricing based on your specific needs and requirements. Our packages can be customized to include any combination of our services.</p>
            <div class="pricing-features">
              <div class="feature">
                <i class="fas fa-check"></i>
                <span>Transparent pricing with no hidden costs</span>
              </div>
              <div class="feature">
                <i class="fas fa-check"></i>
                <span>Flexible packages to suit your budget</span>
              </div>
              <div class="feature">
                <i class="fas fa-check"></i>
                <span>All equipment and setup included</span>
              </div>
              <div class="feature">
                <i class="fas fa-check"></i>
                <span>Professional team and service guarantee</span>
              </div>
            </div>
            <button class="cta-button" (click)="contactUs()">BOOK NOW</button>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  
  services = [
    {
      name: 'Ghori',
      description: 'The Ghori holds a special place in Indian weddings, symbolizing pride, tradition, and celebration. At Herra Band, we provide beautifully decorated Ghori (wedding horse) that adds grandeur to your Baraat procession.',
      image: 'https://shopshaadi.com/wp-content/uploads/2024/03/4-6.webp',
      features: [
        'A well-groomed and decorated horse with traditional embellishments',
        'Professional horse handler included',
        'Complete ceremonial setup',
        'Safety equipment and insurance'
      ]
    },
    {
      name: 'Baggi',
      description: 'A wedding is incomplete without the charm of a Baggi (decorated carriage) – a symbol of royalty and grandeur. At Herra Band, we provide beautifully adorned Baggis that make the groom’s entry a moment to remember.',
      image: 'https://www.shivmohanband.com/images/g3.jpg',
      features: [
        'Elegantly decorated carriage with flowers, lights, and traditional designs',
        'Professional driver and assistant',
        'A majestic royal feel that makes the groom’s arrival unforgettable',
        'Photo-friendly setup'
      ]
    },
    {
      name: 'Doli',
      description: 'The Doli ceremony is one of the most emotional and cherished moments of an Indian wedding. Symbolizing the bride’s graceful departure to her new home, the Doli is not just a carriage—it’s a tradition filled with love, respect, and blessings.',
      image: 'https://i1.wp.com/wittyvows.com/wp-content/uploads/2019/08/9447546025200e97a7ad60876a1fa687.jpg?resize=375%2C375',
      features: [
        'Exquisitely designed Dolis adorned with flowers, fabrics, and lights',
        'Traditional and royal styles to match your wedding theme',
        'A touch of culture and heritage to honor this emotional moment',
        'Gentle music to create a heartfelt atmosphere during the send-off'
      ]
    },
    {
      name: 'Band & Dhol',
      description: 'No Indian wedding or event is complete without the energetic beats of Dhol and the vibrant sounds of the Band. At Herra Band, we bring together the perfect blend of traditional and modern rhythms that set the tone for joy, dance, and unforgettable memories.With Herra Band’s Band & Dhol, every moment of your celebration is filled with energy, rhythm, and cultural charm.',
      image: 'https://5.imimg.com/data5/LH/XR/NN/SELLER-95328874/wedding-dhol-band-services-in-gurgaon-7289960600.jpg',
      features: [
        'Live band music with trumpets, clarinets, and shehnai for a rich traditional feel',
        'Powerful dhol beats to energize the Baraat and get everyone dancing',
        'A lively atmosphere that keeps guests engaged and entertained',
        'Custom performances tailored for weddings, engagements, and special events'
      ]
    },
    {
      name: 'Flower Chhatar',
      description: 'The Flower Chhatar (floral canopy) is one of the most graceful and stylish elements of an Indian wedding. Traditionally carried over the groom during the Baraat or over the bride during her entry, it adds a royal touch while blessing the couple with beauty and elegance.At Herra Band, we provide stunning Flower Chhatars designed to match your wedding theme and make your entry truly spectacular.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/547810527/QV/HD/LY/98186692/wedding-flower-decoration-service.jpg',
      features: [
        'Fresh flower arrangements',
        'Traditional umbrella decorations',
        'Custom color schemes available',
        'Setup and maintenance included'
      ]
    },
    {
      name: 'Lights & Decoration',
      description: 'Every celebration deserves a setting that feels magical. With Herra Band’s Lights & Decoration service, we transform ordinary venues into stunning spaces filled with beauty, warmth, and festive vibes. From vibrant wedding lights to elegant floral and thematic decorations, we create the perfect ambiance for your big day.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353933863/JK/MF/FR/102256646/marriage-light-decoration-service-500x500.png',
      features: [
        'Creative lighting setups – LED, fairy lights, chandeliers & traditional lamps',
        'Floral & fabric décor to enhance entrances, stages, and pathways',
        'Theme-based designs tailored to your wedding style',
        'A complete festive atmosphere that blends tradition with modern elegance'
      ]
    }
  ];

  constructor(
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'Wedding Services - Ghori, Baggi, Dhol, Band & Shehnai | Herra Band Uttarakhand',
      description: 'Complete wedding services in Uttarakhand: Traditional ghori, baggi, dhol, band & shehnai, flower chhatar, lights & decoration. Serving Ramnagar, Jim Corbett, Nainital.',
      keywords: 'wedding ghori Ramnagar, baggi service Uttarakhand, dhol band Jim Corbett, shehnai Nainital, wedding decoration Uttarakhand, flower chhatar, wedding lights'
    });
  }

  contactUs() {
    this.router.navigate(['/contact']);
  }
}