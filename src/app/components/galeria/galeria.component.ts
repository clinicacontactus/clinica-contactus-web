import { Component, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements AfterViewInit, OnChanges {
  @Input() urls: { photoUrl: string }[] = [];
  private swiper: Swiper | undefined;
  isModalOpen = false;
  selectedImage = '';

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['urls'] && this.urls.length > 0) {
      setTimeout(() => {
        this.initSwiper();
      });
    }
  }

  private initSwiper(): void {
    if (this.swiper) {
      this.swiper.destroy(true, true); // Destroi a instância antiga antes de recriar
    }

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

  trackByFn(index: number, item: { photoUrl: string }): string {
    return item.photoUrl;
  }
}
