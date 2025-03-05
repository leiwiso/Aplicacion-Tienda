import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  compras: any = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.compras = JSON.parse(localStorage.getItem('comprado') || 'null');
  }

  irHome() {
    this.router.navigate(['/home']);
  }
}
