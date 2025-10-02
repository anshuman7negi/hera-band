import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Herra Band</h1>
          <h2>Premier Wedding & Event Band in Jim Corbett</h2>
          <p>Creating magical moments with traditional music and celebrations across Uttarakhand. Your perfect wedding celebration starts here.</p>
          <button class="cta-button" (click)="navigateToContact()">Book Now</button>
        </div>

<div class="hero-image">
  <div class="carousel">
    <div 
      class="carousel-track" 
      [style.transform]="'translateX(-' + currentIndex * 100 + '%)'">
      <div class="carousel-item" *ngFor="let img of heroImages">
        <img [src]="img" alt="Wedding Band Showcase">
      </div>
    </div>
  </div>
</div>

      </section>

      <!-- About Section -->
      <section class="about-intro">
        <div class="container">
          <h2>Welcome to Herra Band</h2>
          <p>At Herra Band, we believe that every celebration deserves the perfect blend of music, tradition, and grandeur. With decades of experience in bringing joy to weddings and special events, we are proud to be one of the most trusted wedding bands in Ramnagar, Jim Corbett, Nainital, and across Uttarakhand</p>
        </div>
      </section>

      <!-- Services Overview -->
      <section class="services-overview">
        <div class="container">
          <h2>Our Services</h2>
          <div class="services-grid">
            <div class="service-card" *ngFor="let service of services">
              <img [src]="service.image" [alt]="service.name" />
              <div class="service-content">
                <h3>{{ service.name }}</h3>
                <p>{{ service.description }}</p>
                <button class="know-more-btn" (click)="navigateToServices()">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Photo Showcase -->
      <section class="photo-showcase">
        <div class="container">
          <h2>Our Work</h2>
          <div class="photo-grid">
            <div class="photo-item" *ngFor="let photo of photos">
              <img [src]="photo.src" [alt]="photo.alt" />
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <h2>Ready to Make Your Event Memorable?</h2>
          <p>Contact us today to discuss your wedding or event needs</p>
          <button class="cta-button" (click)="navigateToContact()">Get In Touch</button>
        </div>
      </section>
    </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  services = [
    {
      name: 'Ghori',
      description: 'The Ghori holds a special place in Indian weddings, symbolizing pride, tradition, and celebration. At Herra Band, we provide beautifully decorated Ghori (wedding horse) that adds grandeur to your Baraat procession.',
      image: 'https://shopshaadi.com/wp-content/uploads/2024/03/4-6.webp'
    },
    {
      name: 'Baggi',
      description: 'A wedding is incomplete without the charm of a Baggi (decorated carriage) – a symbol of royalty and grandeur. At Herra Band, we provide beautifully adorned Baggis that make the groom’s entry a moment to remember.',
      image: 'https://www.shivmohanband.com/images/g3.jpg'
    },
    {
      name: 'Doli',
      description: 'The Doli ceremony is one of the most emotional and cherished moments of an Indian wedding. At Herra Band, we provide beautifully decorated Dolis that add grace and elegance to this sacred ritual.',
      image: 'https://i1.wp.com/wittyvows.com/wp-content/uploads/2019/08/9447546025200e97a7ad60876a1fa687.jpg?resize=375%2C375'
    },
    {
      name: 'Band & Dhol',
      description: 'No Indian wedding or event is complete without the energetic beats of Dhol and the vibrant sounds of the Band. At Herra Band, we bring together the perfect blend of traditional and modern rhythms that set the tone for joy, dance, and unforgettable memories.',
      image: 'https://5.imimg.com/data5/LH/XR/NN/SELLER-95328874/wedding-dhol-band-services-in-gurgaon-7289960600.jpg'
    },
    {
      name: 'Flower Chhatar',
      description: 'The Flower Chhatar (floral canopy) is one of the most graceful and stylish elements of an Indian wedding.At Herra Band, we provide stunning Flower Chhatars designed to match your wedding theme and make your entry truly spectacular.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/547810527/QV/HD/LY/98186692/wedding-flower-decoration-service.jpg'
    },
    {
      name: 'Lights & Decoration',
      description: 'Every celebration deserves a setting that feels magical. With Herra Band’s Lights & Decoration service, we transform ordinary venues into stunning spaces filled with beauty, warmth, and festive vibes.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353933863/JK/MF/FR/102256646/marriage-light-decoration-service-500x500.png'
    }
  ];

  photos = [
    { src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg', alt: 'Wedding celebration' },
    { src: 'https://5.imimg.com/data5/LH/XR/NN/SELLER-95328874/wedding-dhol-band-services-in-gurgaon-7289960600.jpg', alt: 'Traditional music' },
    { src: 'https://5.imimg.com/data5/SELLER/Default/2025/9/547810527/QV/HD/LY/98186692/wedding-flower-decoration-service.jpg', alt: 'Dhol performance' },
    { src: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353933863/JK/MF/FR/102256646/marriage-light-decoration-service-500x500.png', alt: 'Band performance' }
  ];

  heroImages = [
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
  'https://5.imimg.com/data5/LH/XR/NN/SELLER-95328874/wedding-dhol-band-services-in-gurgaon-7289960600.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2025/9/547810527/QV/HD/LY/98186692/wedding-flower-decoration-service.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2023/10/353933863/JK/MF/FR/102256646/marriage-light-decoration-service-500x500.png'
];



  constructor(
    private router: Router,
    private seoService: SeoService
  ) { }

  currentIndex = 0;

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'Herra Band - Wedding & Event Band in Ramnagar, Corbett, Nainital, Uttarakhand',
      description: 'Premier wedding band in Ramnagar, Jim Corbett, Nainital. Traditional dhol, baggi, ghori, band & shehnai services across Uttarakhand. Book now for unforgettable celebrations.',
      keywords: 'wedding band Ramnagar, band Jim Corbett, Nainital wedding band, Uttarakhand band services, dhol baggi lights Ramnagar, wedding music Uttarakhand'
    });

     setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.heroImages.length;
  }, 3000);

  }

  

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToServices() {
    this.router.navigate(['/services']);
  }
}