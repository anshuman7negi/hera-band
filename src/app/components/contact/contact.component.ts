import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact">
      <!-- Hero Section -->
      <section class="contact-hero">
        <div class="container">
          <h1>Contact Us</h1>
          <p>Whether you’re planning a wedding, engagement, or a grand celebration, Hera Band is here to bring the perfect blend of music, tradition, and festivity to your special day.</p>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form">
              <h2>Send Us a Message</h2>
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" novalidate>
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    formControlName="name"
                    [class.error]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                  >
                  <div class="error-message" *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                    Name is required
                  </div>
                </div>

                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    [class.error]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                  >
                  <div class="error-message" *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                    <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
                    <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                  </div>
                </div>

                <div class="form-group">
                  <label for="mobile">Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobile"
                    formControlName="mobile"
                    [class.error]="contactForm.get('mobile')?.invalid && contactForm.get('mobile')?.touched"
                  >
                  <div class="error-message" *ngIf="contactForm.get('mobile')?.invalid && contactForm.get('mobile')?.touched">
                    <span *ngIf="contactForm.get('mobile')?.errors?.['required']">Mobile number is required</span>
                    <span *ngIf="contactForm.get('mobile')?.errors?.['pattern']">Please enter a valid mobile number</span>
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea
                    id="message"
                    formControlName="message"
                    rows="5"
                    [class.error]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  ></textarea>
                  <div class="error-message" *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
                    Message is required
                  </div>
                </div>

                <button type="submit" class="submit-btn" [disabled]="contactForm.invalid || isSubmitting">
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                </button>

                <div class="success-message" *ngIf="showSuccessMessage">
                  Thank you for your message! We'll get back to you soon.
                </div>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="contact-info">
              <h2>Get in Touch</h2>
              
              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Address</h3>
                  <p>Ramnagar, Uttarakhand<br>India - 244715</p>
                </div>
              </div>

              <div class="info-item">
                <i class="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                </div>
              </div>

              <div class="info-item">
                <i class="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:info@heraband.com">info@heraband.com</a></p>
                </div>
              </div>

              <div class="info-item">
                <i class="fab fa-whatsapp"></i>
                <div>
                  <h3>WhatsApp</h3>
                  <p><a href="https://wa.me/919876543210" target="_blank">Chat with us</a></p>
                </div>
              </div>

              <!-- Quick Services -->
              <div class="quick-services">
                <h3>Our Services</h3>
                <ul>
                  <li>Wedding Band & Shehnai</li>
                  <li>Dhol Performances</li>
                  <li>Ghori & Baggi Services</li>
                  <li>Flower Decorations</li>
                  <li>Lights & Event Setup</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Map Section -->
          <div class="map-section">
            <h2>Find Us</h2>
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8267749859844!2d79.1245!3d29.3895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c96c5%3A0x1ba3e62fdedb7e9!2sRamnagar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1629000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(
    private fb: FormBuilder,
    private seoService: SeoService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'Contact Hera Band - Wedding Band Booking in Ramnagar, Uttarakhand',
      description: 'Contact Hera Band for wedding bookings in Ramnagar, Jim Corbett, Nainital. Get quotes for ghori, baggi, dhol, band services across Uttarakhand. Call +91 98765 43210',
      keywords: 'contact Hera Band, wedding booking Ramnagar, band contact Uttarakhand, wedding services Jim Corbett, Nainital wedding band booking'
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}