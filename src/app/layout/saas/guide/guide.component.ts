import { Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-guide',
  imports: [TuiHeader, TuiIcon],
  template: `
    <div class="w-full bg-[#93ebe3]  py-6 rounded-b-md navigator-bg" tuiHeader>
      <div class="flex flex-col w-full px-2 gap-2 items-start">
        <div class="flex gap-2 items-center ">
          <tui-icon [icon]="'@tui.archive'" tuiSubtitle></tui-icon>
          <h5 tuiSubtitle>Home</h5>
        </div>
        <div class="flex gap-6">
          <h1 tuiTitle>Reviews</h1>
          <h1 tuiTitle>1</h1>
        </div>
      </div>
    </div>
  `,
  styles: `
    .navigator-bg {
      background-image: url('./assets/images/navigator-bg.svg');
      background-size:
        100% 200dvh,
        contain;
      background-position: center;
    }
  `,
})
export class GuideComponent {}
