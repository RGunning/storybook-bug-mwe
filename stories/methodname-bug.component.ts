import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-method-name',
  template: `<button (click)="onButtonClick()">Click me</button>`,
})
export class MethodNameComponent {
  onButtonClick() {
    console.log('This is no longer called');
  }
}
