import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResultTableComponent } from './result-table/result-table.component';
import { ResultPaginationComponent } from './result-pagination/result-pagination.component';
import { ResultControlsComponent } from './result-controls/result-controls.component';

@Component({
  selector: 'app-result',
  imports: [
    ResultTableComponent,
    ResultPaginationComponent,
    ResultControlsComponent,
  ],
  template: `
    <main class="flex flex-col gap-4">
      <section><app-result-controls></app-result-controls></section>
      <section>
        <app-result-table class="w-full"></app-result-table>
      </section>
      <section><app-result-pagination></app-result-pagination></section>
    </main>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {}
