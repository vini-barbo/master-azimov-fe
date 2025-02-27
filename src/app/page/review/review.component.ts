import { CommonModule, NgForOf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TuiTextfield, TuiAlertService } from '@taiga-ui/core';
import { TuiTabs } from '@taiga-ui/kit';
import { IdentificationComponent } from './identification/identification.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-review',
  imports: [
    TuiTabs,
    CommonModule,
    TuiTextfield,
    IdentificationComponent,
    SearchComponent,
    ResultComponent,
  ],
  template: `
    <main class="i-main-card">
      <div *ngIf="reviewId; else elseBlock">
        <tui-tabs [(activeItemIndex)]="activeItemIndex">
          <button
            *ngFor="let option of options"
            [iconStart]="option.icon"
            tuiTab
            type="button"
            (click)="onClick(option.name)">
            {{ option.name }}
          </button>
        </tui-tabs>

        <app-identification *ngIf="activeItemIndex == 1"></app-identification>
        <app-search *ngIf="activeItemIndex == 0"></app-search>
        <app-result *ngIf="activeItemIndex == 2"></app-result>
      </div>
      <ng-template #elseBlock>
        <p>Loading review...</p>
      </ng-template>
    </main>
  `,
  styles: ``,
})
export class ReviewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  protected activeItemIndex = 0;
  protected readonly options = [
    { name: 'Identification', icon: '@tui.book' },
    { name: 'Search', icon: '@tui.scan-search' },
    { name: 'Result', icon: '@tui.table-properties' },
  ];

  private readonly alerts = inject(TuiAlertService);
  protected onClick(item: string): void {
    this.alerts.open(item).subscribe();
  }

  reviewId: string | null = null;
  ngOnInit() {
    this.reviewId = this.route.snapshot.paramMap.get('id');
  }
}
