import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [],
  template: ` <p>result works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {}
