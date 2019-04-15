import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() inputValue: number;
  @Output() outputValueEmmiter: EventEmitter<number> = new EventEmitter<number>();

  counter = 0;

  count() {
    this.counter++;
    this.outputValueEmmiter.emit(this.counter);
  }
}
