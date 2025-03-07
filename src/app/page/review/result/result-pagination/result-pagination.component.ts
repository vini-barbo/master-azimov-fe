import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiPagination } from '@taiga-ui/kit';
import {
  TuiInputSliderModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  selector: 'app-result-pagination',
  imports: [TuiPagination],
  template: `
    <tui-pagination
      [length]="pageCount"
      [index]="currentPage"
      (indexChange)="goToPage($event)"></tui-pagination>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultPaginationComponent {
  protected pageCount = 64;

  protected currentPage = 10;

  protected goToPage(currentPage: number): void {
    this.currentPage = currentPage;
    console.info('New page:', currentPage);
  }
}
