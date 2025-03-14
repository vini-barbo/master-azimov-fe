import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiSearch } from '@taiga-ui/layout';

@Component({
  standalone: true,
  selector: 'app-result-table',
  imports: [CommonModule, TuiSearch, TuiTextfield, TuiButton],
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex w-full justify-between">
        <search tuiSearch class="w-64">
          <fieldset>
            <tui-textfield iconEnd="@tui.search" class="!text-black">
              <input
                tuiTextfield
                formControlName="search"
                class=" !text-black"
                style="color:black" />
            </tui-textfield>
          </fieldset>
        </search>

        <div class="flex gap-2 h-full items-center">
          <button
            tuiButton
            [size]="'m'"
            iconEnd="@tui.x"
            [appearance]="'outline-grayscale'">
            Clear Selection
          </button>
          <button
            tuiButton
            [size]="'m'"
            iconEnd="@tui.square-dashed"
            [appearance]="'warning'">
            Select all
          </button>
          <button
            tuiButton
            [size]="'m'"
            iconEnd="@tui.download"
            class="i-color-primary !text-white">
            Download Excel
          </button>
        </div>
      </div>
      <div>
        <div class="w-full max-w-full overflow-x-scroll">
          <table class="fl-table !rounded-lg shadow-2xl ">
            <thead class="fl-table">
              <tr>
                <th>
                  <input [type]="'checkbox'" />
                </th>

                <th *ngFor="let header of columns">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let row of data; let i = index"
                class="lg:hover:!bg-[#167376]  lg:hover:text-white
            lg:hover:font-bold hover:cursor-pointer transition-all duration-200 lg:hover:scale-y-110 ">
                <td><input [type]="'checkbox'" [value]="row.ID" /></td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.ID }}
                </td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.NAME }}
                </td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.CITATION }}
                </td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.OPEN }}
                </td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.SOURCE }}
                </td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.YEAR }}
                </td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.DOI }}
                </td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.AUTHORS }}
                </td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.ABSTRACT }}
                </td>
                <td
                  class="truncate max-w-[200px] overflow-hidden text-ellipsis">
                  {{ row.ACTION }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./index.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultTableComponent {
  protected initial: readonly string[] = [
    'id',
    'name',
    'citation',
    'open',
    'source',
    'year',
    'doi',
    'authors',
    'abstract',
    'action',
  ];

  protected columns = [
    'ID',
    'NAME',
    'CITATION',
    'OPEN',
    'SOURCE',
    'YEAR',
    'DOI',
    'AUTHORS',
    'ABSTRACT',
    'ACTION',
  ];

  data = [
    {
      ID: 1,
      NAME: 'Predicting Disease Outbreaks Using AI',
      CITATION: 'Smith J. et al, 2023',
      OPEN: true,
      SOURCE: 'Journal of Medical Informatics',
      YEAR: 2023,
      DOI: '10.1234/jmi.2023.001',
      AUTHORS: ['John Smith', 'Jane Doe', 'Alan Turing'].join(', '),
      ABSTRACT:
        'This study explores the application of artificial intelligence in predicting disease outbreaks using large-scale epidemiological data.',
      ACTION: 'Review',
    },
    {
      ID: 2,
      NAME: 'Data Mining Techniques for Sentinel Networks',
      CITATION: 'Doe J. et al, 2022',
      OPEN: false,
      SOURCE: 'International Journal of Data Science',
      YEAR: 2022,
      DOI: '10.5678/ijds.2022.045',
      AUTHORS: ['Jane Doe', 'Mark Spencer'].join(', '),
      ABSTRACT:
        'A comprehensive review of data mining techniques used to enhance the capabilities of sentinel networks for disease surveillance.',
      ACTION: 'Cite',
    },
    {
      ID: 3,
      NAME: 'Early Warning Systems with Predictive Analytics',
      CITATION: 'Brown K. et al, 2021',
      OPEN: true,
      SOURCE: 'Health Data Journal',
      YEAR: 2021,
      DOI: '10.9101/hdj.2021.089',
      AUTHORS: ['Kyle Brown', 'Emma Wilson'].join(', '),
      ABSTRACT:
        'This paper discusses the development and deployment of early warning systems for infectious diseases, using predictive analytics and machine learning.',
      ACTION: 'Discuss',
    },
  ];

  // keyOrder = (a: any, b: any): number => {
  //   const order = [
  //     'ID',
  //     'NAME',
  //     'CITATION',
  //     'OPEN',
  //     'SOURCE',
  //     'YEAR',
  //     'DOI',
  //     'AUTHORS',
  //     'ABSTRACT',
  //     'ACTION',
  //   ];
  //   return order.indexOf(a.key) - order.indexOf(b.key);
  // };
}
