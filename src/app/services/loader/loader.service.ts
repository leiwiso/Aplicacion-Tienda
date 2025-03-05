import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private loadingCtrl: LoadingController) {}

  async showLoader(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 3000,
      spinner: 'crescent'
    });
    await loading.present();
  }
}
