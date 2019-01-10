import { Component, Input } from '@angular/core';

@Component({
  selector: 'mat-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class MatConsoleComponent {
  @Input() public hideFilter = false;
  @Input() public filterPlaceholder = 'Filter';
  @Input() public hidePadlock = false;
  @Input() public padlockAriaLabel = 'Lock or unlock console logs';

  public get padlockIcon(): string {
    return this.locked ? 'lock' : 'lock_open';
  }

  private locked = false;

  public lock(): void {
    this.locked = !this.locked;
  }
}
