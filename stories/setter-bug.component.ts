import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-setter',
  template: `<div *ngIf="isDivShowing">This should show</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetterComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  isDivShowing = false;

  @Input() set showDiv(value: boolean) {
    this.isDivShowing = !!value;
    this.cdr.markForCheck();
  }
  get showDiv() {
    return this.isDivShowing;
  }
}
