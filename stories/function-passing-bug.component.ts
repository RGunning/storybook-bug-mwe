import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-function-passing',
  template: `<div>{{text}}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionPassingComponent {
  value = 1000;

  @Input() displayWith: (value: number) => string = (_value) => '';

  get text() {
    return this.displayWith(this.value);
  }
}
