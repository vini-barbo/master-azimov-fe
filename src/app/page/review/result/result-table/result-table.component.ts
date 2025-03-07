import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import {
  TuiAutoColorPipe,
  TuiButton,
  TuiDropdown,
  TuiIcon,
  TuiInitialsPipe,
  TuiLink,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiCheckbox,
  TuiChip,
  TuiItemsWithMore,
  TuiProgressBar,
  TuiRadioList,
  TuiStatus,
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  standalone: true,
  selector: 'app-result-table',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    TuiAutoColorPipe,
    TuiAvatar,
    TuiBadge,
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiChip,
    TuiDropdown,
    TuiIcon,
    TuiInitialsPipe,
    TuiItemsWithMore,
    TuiLink,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
    TuiTable,
    TuiTitle,
  ],
  template: `
    <!-- <div [style.margin-bottom.rem]="2">
      <tui-radio-list
        [itemContent]="content"
        [items]="sizes"
        [style.flex-direction]="'row'"
        [style.width]="'max-content'"
        [(ngModel)]="size" />
      <ng-template #content let-value>
        {{ value === 's' ? 'Small' : value === 'm' ? 'Medium' : 'Large' }}
      </ng-template>
    </div> -->

    <table tuiTable [size]="size" [style.width.rem]="58" class="!w-full">
      <thead>
        <tr>
          <th tuiTh>
            <div [tuiCell]="size">
              <input
                tuiCheckbox
                type="checkbox"
                [ngModel]="checked"
                [size]="size === 'l' ? 'm' : 's'"
                (ngModelChange)="onCheck($event)" />
              <span tuiTitle>Checkbox</span>
            </div>
          </th>
          <th tuiTh>Title</th>
          <th tuiTh>Cell</th>
          <th tuiTh>Status</th>
          <th tuiTh [style.width.rem]="10">Items</th>
          <th tuiTh>Progress</th>
          <th tuiTh>Actions</th>
        </tr>
      </thead>
      <tbody tuiTbody>
        <tr *ngFor="let item of data">
          <td tuiTd>
            <div [tuiCell]="size">
              <input
                tuiCheckbox
                type="checkbox"
                [size]="size === 'l' ? 'm' : 's'"
                [(ngModel)]="item.selected" />
              <span tuiTitle>
                {{ item.checkbox.title }}
                <span tuiSubtitle>{{ item.checkbox.subtitle }}</span>
              </span>
            </div>
          </td>
          <td tuiTd>
            <div [tuiCell]="size">
              <span tuiTitle>
                <span tuiStatus>
                  <tui-icon [icon]="item.title.icon" />
                  {{ item.title.title }}
                  <tui-chip *ngIf="item.title.chip && item.title.subtitle">{{
                    item.title.chip
                  }}</tui-chip>
                </span>
                <tui-chip
                  *ngIf="
                    !item.title.subtitle && item.title.chip;
                    else subtitle
                  ">
                  {{ item.title.chip }}
                </tui-chip>
                <ng-template #subtitle>
                  <span tuiSubtitle>
                    {{ item.title.subtitle }}
                  </span>
                </ng-template>
              </span>
            </div>
          </td>
          <td tuiTd>
            <div [tuiCell]="size">
              <tui-avatar
                [src]="item.cell.name | tuiInitials"
                [style.background]="item.cell.name | tuiAutoColor" />
              <span tuiTitle>
                {{ item.cell.name }}
                <span tuiSubtitle>{{ item.cell.email }}</span>
              </span>
            </div>
          </td>
          <td tuiTd>
            <span [tuiStatus]="item.status.color">{{ item.status.value }}</span>
          </td>
          <td tuiTd>
            <tui-items-with-more [style.gap.rem]="0.25">
              <ng-container *ngFor="let chip of item.items">
                <tui-badge *tuiItem>{{ chip }}</tui-badge>
              </ng-container>
              <ng-template let-number tuiMore>
                <button
                  appearance="action-grayscale"
                  tuiDropdownAlign="right"
                  tuiDropdownOpen
                  tuiLink
                  type="button"
                  [pseudo]="true"
                  [tuiDropdown]="dropdown">
                  + {{ item.items.length - number - 1 }}
                </button>
                <ng-template #dropdown>
                  <div tuiStatus [style.padding.rem]="1">
                    <ng-container
                      *ngFor="let chip of item.items; let index = index">
                      <tui-badge *ngIf="index > number">{{ chip }}</tui-badge>
                    </ng-container>
                  </div>
                </ng-template>
              </ng-template>
            </tui-items-with-more>
          </td>
          <td tuiTd>
            <span tuiStatus>
              <progress
                tuiProgressBar
                [style.width.rem]="6"
                [value]="item.progress / 100"></progress>
              {{ item.progress }}ms
            </span>
          </td>
          <td tuiTd>
            <span tuiStatus>
              <button
                appearance="action"
                iconStart="@tui.pencil"
                size="xs"
                tuiIconButton
                type="button">
                Edit
              </button>
              <button
                appearance="action"
                iconStart="@tui.ellipsis"
                size="xs"
                tuiIconButton
                type="button">
                More
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultTableComponent {
  protected readonly sizes = ['l', 'm', 's'] as const;

  protected size = this.sizes[0];

  protected readonly data = [
    {
      checkbox: {
        title: 'Data point 1',
        subtitle: 'The first element',
      },
      title: {
        icon: '@tui.file',
        title: 'This is title',
        chip: 'Chip',
        subtitle: 'More information ・ Data',
      },
      cell: {
        name: 'John Cleese',
        email: 'silly@walk.uk',
      },
      status: {
        value: 'Success',
        color: 'var(--tui-status-positive)',
      },
      items: ['Some', 'items', 'displayed', 'here', 'and', 'can', 'overflow'],
      progress: 78,
      selected: false,
    },
    {
      checkbox: {
        title: 'Some title',
        subtitle: 'Some more text',
      },
      title: {
        icon: '@tui.heart',
        title: 'More info',
        chip: 'Chips can be here',
      },
      cell: {
        name: 'Eric Idle',
        email: 'cool@dude.com',
      },
      status: {
        value: 'Failure',
        color: 'var(--tui-status-negative)',
      },
      items: ['One', 'Item'],
      progress: 91,
      selected: false,
    },
    {
      checkbox: {
        title: 'And now',
        subtitle: 'Completely different',
      },
      title: {
        icon: '@tui.star',
        title: 'Wow',
      },
      cell: {
        name: 'Michael Palin',
        email: 'its@man.com',
      },
      status: {
        value: 'Pending',
        color: 'var(--tui-status-warning)',
      },
      items: [],
      progress: 32,
      selected: false,
    },
  ];

  protected get checked(): boolean | null {
    const every = this.data.every(({ selected }) => selected);
    const some = this.data.some(({ selected }) => selected);

    return every || (some && null);
  }

  protected onCheck(checked: boolean): void {
    this.data.forEach(item => {
      item.selected = checked;
    });
  }
}
