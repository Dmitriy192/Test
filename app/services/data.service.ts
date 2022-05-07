import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public currentWidth = 1920;
  public screenWidthSubject = new BehaviorSubject(1920);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.screenWidthSubject.next(window.innerWidth);
    window.addEventListener('resize', () => {
      if (isPlatformBrowser(this.platformId)) {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }

      const tempWidth = window.innerWidth;
      if (tempWidth < 1920 && this.currentWidth >= 1920 || tempWidth >= 1920 && this.currentWidth < 1920) {
        this.currentWidth = tempWidth;
        this.screenWidthSubject.next(this.currentWidth);
      }
    });
  }
}
