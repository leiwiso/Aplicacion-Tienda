import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { StorageService } from 'src/app/services/local/storage.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  standalone: false,
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  checkP: FormGroup;
  procePago: boolean = false;

  constructor(private carroServi: StorageService, private router: Router, private fb: FormBuilder, private toast: ToastService, private loader: LoaderService) {
    this.checkP = this.fb.group({
      name: ['', Validators.required],
      correo: ['', Validators.required],
      carNumero: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      DiaExpir: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
      cvv: ['', Validators.required],
    })
   }

  ngOnInit() {
  }

  procesoPago() {
    if (this.checkP.invalid) {
      return;
    }

    this.procePago = true;
    this.toast.toast('Procesando pago...', 'warning');
    this.loader.showLoader('Procesando pago...');

    setTimeout(() => {
      this.procePago = false;

      let carroI: any [] = [];
      this.carroServi.getCarro().subscribe(carro => {
        carroI = [... carro];
      })
      
      localStorage.setItem('comprado', JSON.stringify({
        cus: this.checkP.value,
        carro: carroI
      }));

      this.carroServi.clearCarro();
      this.toast.toast('Pago exitoso 🎉', 'success');
      this.router.navigate(['/summary']);
    }, 3000);

  }
}
