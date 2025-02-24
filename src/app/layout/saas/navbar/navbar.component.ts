import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiSearch } from '@taiga-ui/layout';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    ReactiveFormsModule,
    TuiAvatar,
    TuiNavigation,
    TuiTextfield,
    TuiSearch,
  ],
  template: `
    <header
      tuiNavigationHeader
      class="!bg-white !py-8 !px-7  !text-black !flex !justify-between">
      <div class="flex gap-10 items-center lg:w-[50%]">
        <div class="flex gap-3 items-center">
          <div class="logo h-24 w-24"></div>
        </div>

        <search tuiSearch [className]="'w-full'">
          <form [formGroup]="form">
            <fieldset>
              <tui-textfield iconEnd="@tui.search" class="!text-black">
                <input
                  tuiTextfield
                  formControlName="search"
                  class="!bg-[#DCE6F4] !text-black"
                  style="color:black" />
              </tui-textfield>
            </fieldset>
          </form>
        </search>
      </div>

      <div class="!flex items-start gap-4 font-bold text-lg">
        <tui-avatar [src]="'@tui.user'" class="!text-black" [round]="false" />
        Vinicius Barbosa
        <div>></div>
      </div>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
        transform: translate3d(0, 0, 0);
      }

      [tuiNavigationHeader] {
        white-space: nowrap;
        inline-size: 100% !important;
        box-shadow: none !important;

        &::before {
          display: none;
        }
      }

      .logo {
        background-image: url('./assets/images/logo.svg');
        background-size: contain;
        background-position: -10%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly form = new FormGroup({
    search: new FormControl(),
    select: new FormControl(),
    date: new FormControl(),
    switch: new FormControl(),
    filter: new FormControl(),
    segmented: new FormControl(),
  });
}
