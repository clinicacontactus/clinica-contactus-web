import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements AfterViewInit {
  @Input() urls: { photoUrl: string }[] = [];
  lightboxImages: any[] = [];
  private swiper: Swiper | undefined;
  isModalOpen = false;
  selectedImage = '';

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.initSwiper();
    }, 500);

    this.urls.forEach((url, index) => {
      this.lightboxImages.push({
        src: url.photoUrl,
        caption: `Imagem ${index + 1}`,
        thumb: url.photoUrl
      });
    });
  }

  private initSwiper(): void {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }
    });
  }

  openLightbox(index: number): void {
    this.selectedImage = this.urls[index].photoUrl;
    this.isModalOpen = true;
  }

  closeImage(): void {
    this.isModalOpen = false;
  }
}
