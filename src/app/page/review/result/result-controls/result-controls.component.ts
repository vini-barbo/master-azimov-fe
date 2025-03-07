import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-result-controls',
  imports: [TuiButton],
  template: `
    <div class="w-full flex justify-end gap-2">
      <button
        tuiButton
        class="i-color-primary text-white"
        size="m"
        [iconEnd]="'@tui.sheet'">
        Export as CSV
      </button>
    </div>
  `,
  styles: ``,
})
export class ResultControlsComponent {}
