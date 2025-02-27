import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAppearance, TuiTextfield } from '@taiga-ui/core';
import { TuiCardLarge, TuiForm } from '@taiga-ui/layout';

@Component({
  selector: 'app-identification',
  imports: [TuiAppearance, TuiForm, TuiTextfield, CommonModule],
  template: ` <form class="w-full h-full !grid !grid-cols-2" tuiForm="m">
    <aside class="flex flex-col gap-2">
      <tui-textfield>
        <label tuiLabel>Name</label>
        <input formControlName="name" placeholder="John Wick" tuiTextfield />
      </tui-textfield>
      <tui-textfield>
        <label tuiLabel>Name</label>
        <input formControlName="name" placeholder="John Wick" tuiTextfield />
      </tui-textfield>
      <tui-textfield>
        <label tuiLabel>Name</label>
        <input formControlName="name" placeholder="John Wick" tuiTextfield />
      </tui-textfield>
    </aside>
    <aside class="flex flex-col gap-2">
      <tui-textfield>
        <label tuiLabel>Name</label>
        <input formControlName="name" placeholder="John Wick" tuiTextfield />
      </tui-textfield>
      <tui-textfield>
        <label tuiLabel>Name</label>
        <input formControlName="name" placeholder="John Wick" tuiTextfield />
      </tui-textfield>
      <tui-textfield>
        <label tuiLabel>Name</label>
        <input formControlName="name" placeholder="John Wick" tuiTextfield />
      </tui-textfield>
    </aside>
  </form>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentificationComponent {}
