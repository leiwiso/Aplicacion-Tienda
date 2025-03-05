import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-asc',
  templateUrl: './asc.component.html',
  styleUrls: ['./asc.component.scss'],
})
export class AscComponent  implements OnInit {

  selecAsc: string = '';

  @Output() ascSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  selecAscDes(order: string) {
    this.selecAsc = order;
    this.ascSelect.emit(order);
  }
}
