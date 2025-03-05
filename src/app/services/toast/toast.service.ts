import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastContro: ToastController) { }

  async toast(message: string, color: 'success' | 'danger' | 'warning') {
    const toastS= await this.toastContro.create({
      message,
      duration: 2500,
      position: 'bottom',
      color: color
    });
    await toastS.present();
  }
}
