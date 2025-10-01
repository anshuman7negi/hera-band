import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface WeddingPhoto {
  id: number;
  url: string;
  title: string;
}

interface Video {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
}

@Component({
  imports: [CommonModule],
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  photos: WeddingPhoto[] = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Wedding Ceremony'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/265885/pexels-photo-265885.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Bride Portrait'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Wedding Rings'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Couple Kiss'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Wedding Venue'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'First Dance'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Wedding Bouquet'
    }
  ];

  currentIndex = 0;
  lightboxOpen = false;
  lightboxImageUrl = '';

  get visiblePhotos() {
    return this.photos;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  getPhotoClass(index: number): string {
    const diff = index - this.currentIndex;
    const length = this.photos.length;

    let normalizedDiff = diff;
    if (diff > length / 2) {
      normalizedDiff = diff - length;
    } else if (diff < -length / 2) {
      normalizedDiff = diff + length;
    }

    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === -1) return 'left-1';
    if (normalizedDiff === -2) return 'left-2';
    if (normalizedDiff === 1) return 'right-1';
    if (normalizedDiff === 2) return 'right-2';
    return 'hidden';
  }

  openLightbox(url: string) {
    this.lightboxImageUrl = url;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  // video


  videos: Video[] = [
    {
      id: 'kK42LZqO0wA',
      url: 'https://www.youtube.com/watch?v=kK42LZqO0wA',
      thumbnail: 'https://img.youtube.com/vi/kK42LZqO0wA/maxresdefault.jpg',
      title: 'Beautiful Wedding Ceremony'
    },
    {
      id: 'zXjma-P_N9g',
      url: 'https://www.youtube.com/watch?v=zXjma-P_N9g',
      thumbnail: 'https://img.youtube.com/vi/zXjma-P_N9g/maxresdefault.jpg',
      title: 'Romantic Wedding Video'
    },
    {
      id: 'XNnaxGFO18o',
      url: 'https://www.youtube.com/watch?v=XNnaxGFO18o',
      thumbnail: 'https://img.youtube.com/vi/XNnaxGFO18o/maxresdefault.jpg',
      title: 'Elegant Wedding Highlights'
    },
    {
      id: 'Qz-rydTM6gk',
      url: 'https://www.youtube.com/watch?v=Qz-rydTM6gk',
      thumbnail: 'https://img.youtube.com/vi/Qz-rydTM6gk/maxresdefault.jpg',
      title: 'Dreamy Wedding Moments'
    },
    {
      id: 'V2d8aWOSEZE',
      url: 'https://www.youtube.com/watch?v=V2d8aWOSEZE',
      thumbnail: 'https://img.youtube.com/vi/V2d8aWOSEZE/maxresdefault.jpg',
      title: 'Cinematic Wedding Film'
    }
  ];

  currentIndexV = 0;

  get totalVideos(): number {
    return this.videos.length;
  }

  getVideoPosition(index: number): string {
    const diff = index - this.currentIndex;

    if (diff === 0) return 'center';
    if (diff === -1 || (this.currentIndex === 0 && index === this.totalVideos - 1)) return 'left-1';
    if (diff === 1 || (this.currentIndex === this.totalVideos - 1 && index === 0)) return 'right-1';
    if (diff === -2 || (this.currentIndex <= 1 && index === this.totalVideos - 1 + diff)) return 'left-2';
    if (diff === 2 || (this.currentIndex >= this.totalVideos - 2 && index === diff - this.totalVideos)) return 'right-2';

    return diff < 0 ? 'left-hidden' : 'right-hidden';
  }

  previousSlideV(): void {
    this.currentIndex = this.currentIndex === 0
      ? this.totalVideos - 1
      : this.currentIndex - 1;
  }

  nextSlideV(): void {
    this.currentIndex = this.currentIndex === this.totalVideos - 1
      ? 0
      : this.currentIndex + 1;
  }

  goToSlideV(index: number): void {
    this.currentIndex = index;
  }

  openVideo(url: string): void {
    window.open(url, '_blank');
  }

}

