import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-review',
  imports: [TuiTabs, RouterLink, RouterOutlet, NgForOf],
  template: `
    <main class="i-main-card">
      <tui-tabs-with-more>
        <ng-container *ngFor="let url of phaseUrl">
          <a
            *tuiItem
            routerLinkActive="active"
            tuiTab
            [routerLink]="['/review/', url.path, reviewId]">
            {{ url.name }}
            {{ reviewId }}
          </a>
        </ng-container>
      </tui-tabs-with-more>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  reviewId: string | null = '';

  protected readonly phaseUrl = [
    {
      name: 'Identification',
      path: 'identification',
    },
    {
      name: 'Search',
      path: 'search',
    },
    {
      name: 'Result',
      path: 'result',
    },
  ];

  ngOnInit() {
    this.reviewId = this.route.snapshot.paramMap.get('id');
  }
}
