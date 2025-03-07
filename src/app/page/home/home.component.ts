import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiTextfield, TuiButton } from '@taiga-ui/core';
import { TuiHeader, TuiSearch } from '@taiga-ui/layout';
import { TuiChip } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    TuiTextfield,
    TuiSearch,
    ReactiveFormsModule,
    TuiButton,
    CommonModule,
    TuiHeader,
    TuiChip,
    RouterLink,
  ],
  template: `
    <main class="i-main-card ">
      <div class="flex w-full justify-between">
        <search tuiSearch>
          <form [formGroup]="form">
            <fieldset>
              <tui-textfield iconEnd="@tui.search" class="!text-black">
                <input
                  tuiTextfield
                  formControlName="search"
                  class=" !text-black"
                  style="color:black" />
              </tui-textfield>
            </fieldset>
          </form>
        </search>

        <button tuiButton size="m" iconEnd="@tui.plus" class="i-color-primary">
          Create new revision
        </button>
      </div>

      <div class="grid lg:grid-cols-4 w-full justify-around gap-6">
        <div
          tuiHeader
          *ngFor="let item of [].constructor(4)"
          class="flex flex-col gap-3 s bg-[#DCE6F4] rounded-2xl px-4 py-2 hover:scale-105 duration-700">
          <div tuiTitle>Name</div>

          <div class="flex w-full justify-between items-center gap-2">
            <h1 tuiSubtitle>Created on: 13/08/2022</h1>
            <h1 tuiSubtitle>
              <tui-chip [size]="'m'">
                Owner:
                <img
                  alt="Avatar"
                  src="https://avatars.githubusercontent.com/u/62946143?v=4&size=64"
                  [style.border-radius.rem]="0.5" />
              </tui-chip>
            </h1>
          </div>

          <h1 tuiSubtitle>25 Articles</h1>
          <div class="flex w-full justify-end gap-2">
            <a
              tuiButton
              size="m"
              [appearance]="'icon'"
              [iconEnd]="'@tui.users'">
              Team
            </a>
            <a
              tuiButton
              size="m"
              class="i-color-primary"
              [routerLink]="['/review/', 1]"
              >Open</a
            >
          </div>
        </div>
      </div>
    </main>
  `,
  styles: ``,
})
export class HomeComponent {
  protected readonly form = new FormGroup({
    search: new FormControl(),
    select: new FormControl(),
    date: new FormControl(),
    switch: new FormControl(),
    filter: new FormControl(),
    segmented: new FormControl(),
  });
}
