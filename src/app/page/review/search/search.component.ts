import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  TuiButton,
  TuiDataList,
  TuiDateFormat,
  TuiTitle,
  TuiValueContentContext,
} from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import {
  TuiInputDateModule,
  TuiInputYearModule,
  TuiMultiSelectModule,
  TuiSelectModule,
  TuiTextareaModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { EMPTY_ARRAY, TuiStringHandler } from '@taiga-ui/cdk';

interface IDatabases {
  readonly name: string;
}

const DATABASES: readonly IDatabases[] = [
  {
    name: 'Pubmed',
  },
  {
    name: 'IEEE',
  },
];

interface ILanguages {
  readonly name: string;
}

const LANGUAGES: readonly ILanguages[] = [
  {
    name: 'ENG',
  },
  {
    name: 'PT-BR',
  },
  {
    name: 'ES',
  },
];

@Component({
  selector: 'app-search',
  imports: [
    TuiHeader,
    FormsModule,
    CommonModule,
    TuiDataList,
    TuiMultiSelectModule,
    TuiSelectModule,
    TuiTitle,
    FormsModule,
    ReactiveFormsModule,
    TuiTextareaModule,
    TuiButton,
    ReactiveFormsModule,
    TuiInputDateModule,
    ReactiveFormsModule,
    TuiInputYearModule,
    TuiTextfieldControllerModule,
  ],
  template: `
    <div tuiHeader class="flex flex-col justify-between w-full h-full gap-3">
      <header class="i-title-and-content">
        <h3 tuiTitle>Filters:</h3>
        <div class="grid lg:grid-cols-2 xl:grid-cols-4 w-full gap-3">
          <tui-input-year [formControl]="control" [tuiTextfieldCleaner]="true">
            Choose a year
            <input placeholder="Not 2022 please" tuiTextfieldLegacy />
          </tui-input-year>
          <tui-input-year [formControl]="control" [tuiTextfieldCleaner]="true">
            Choose a year
            <input placeholder="Not 2022 please" tuiTextfieldLegacy />
          </tui-input-year>
          <tui-select
            *ngFor="let c of [0, 1]"
            [valueContent]="content"
            [(ngModel)]="choseDatabase">
            Databases
            <ng-template tuiDataList>
              <tui-data-list>
                <tui-opt-group>
                  <button tuiOption type="button" [value]="all">All</button>
                </tui-opt-group>
                <tui-opt-group label="Databases">
                  <tui-opt-group tuiMultiSelectGroup>
                    <button
                      *ngFor="let item of DATABASES"
                      tuiOption
                      type="button"
                      [value]="item">
                      <span tuiTitle>
                        {{ item.name }}
                      </span>
                    </button>
                  </tui-opt-group>
                </tui-opt-group>
              </tui-data-list>
            </ng-template>
          </tui-select>
        </div>
        <hr class="i-hr !bg-gray-300" />
      </header>

      <section class="i-title-and-content">
        <div class="w-full flex justify-between flex-wrap gap-2 items-center">
          <h3 tuiTitle>Search string:</h3>
          <tui-select
            formControlName="date"
            class="w-full lg:w-72 !bg-gray-300">
            Databases
            <ng-template tuiDataList>
              <tui-data-list>
                <tui-opt-group>
                  <button tuiOption type="button" [value]="all">All</button>
                </tui-opt-group>
                <tui-opt-group label="Databases">
                  <tui-opt-group tuiMultiSelectGroup>
                    <button
                      *ngFor="let item of DATABASES"
                      tuiOption
                      type="button"
                      [value]="item">
                      <span tuiTitle>
                        {{ item.name }}
                      </span>
                    </button>
                  </tui-opt-group>
                </tui-opt-group>
              </tui-data-list>
            </ng-template>
          </tui-select>
          <form
            [formGroup]="testForm"
            class="w-full h-full flex flex-col gap-2">
            <tui-textarea
              formControlName="testValue"
              class="w-full"
              tuiTextfieldIcon="@tui.search"
              >String</tui-textarea
            >
            <button
              iconEnd="@tui.search"
              tuiButton
              size="m"
              class="i-color-primary text-white">
              Generate preview
            </button>
          </form>
        </div>

        <hr class="i-hr" />
      </section>
      <section class="i-title-and-content">
        <h3 tuiTitle>Preview:</h3>
        <div class="grid lg:grid-cols-2 w-full h-full gap-3">
          <div
            class="border border-gray-200 rounded-md flex justify-between items-center p-5"
            *ngFor="let c of [].constructor(4)">
            <div class="flex flex-col gap-2">
              <h1 tuiTitle>PubMed</h1>
              <h2 tuiSubTitle>{{ 2 }} Articles found</h2>
            </div>
            <button
              iconEnd="@tui.eye"
              tuiButton
              size="m"
              class="i-color-primary text-white">
              See preview
            </button>
          </div>
        </div>
      </section>

      <section class="flex justify-end gap-2 w-full">
        <button
          iconEnd="@tui.x"
          tuiButton
          size="m"
          class="text-black"
          [appearance]="'outline-grayscale'">
          Clear
        </button>
        <button
          iconEnd="@tui.search"
          tuiButton
          size="m"
          class="i-color-primary text-white">
          Search
        </button>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  protected choseDatabase = EMPTY_ARRAY;
  protected readonly all = EMPTY_ARRAY;
  protected readonly DATABASES = DATABASES;
  protected readonly content: TuiStringHandler<
    TuiValueContentContext<readonly unknown[]>
  > = ({ $implicit: { length } }) => (length ? `${length} Databases` : 'All');

  testForm = new FormGroup({
    testValue: new FormControl(''),
    date: new FormControl(null),
    choseDatabase: new FormControl([]), // Adicionando controle para bases de dados
  });

  protected readonly control = new FormControl<number | null>(null);
}
