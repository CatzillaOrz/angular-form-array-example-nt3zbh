import { Injectable } from '@angular/core';

@Injectable()
export class AppInitService {
  constructor() {}

  init() {
    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService.init() called');
      // todo
      setTimeout(() => {
        console.log('AppInitService Finished');
      }, 6000);
    });
  }
}
