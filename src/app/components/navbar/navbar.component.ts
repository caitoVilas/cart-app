import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() items: CartItem[] = [];
  @Output() openEventEmmiter = new EventEmitter();

  openCart(): void {
    this.openEventEmmiter.emit();
  }

}
